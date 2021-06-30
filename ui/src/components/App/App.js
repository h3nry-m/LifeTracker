import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import apiClient from "../services/apiClient"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Register from "../Register/Register"
import Login from "../Login/Login"
import PostDetail from "../PostDetail/PostDetail"
import NotFound from "../NotFound/NotFound"
import "./App.css"

export default function App() {
  const [user, setUser] = useState({})
  const [exercises, setExercises] = useState([])
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    const fetchExercises = async () => {
      setIsFetching(true)

        const {data,error} = await apiClient.listExercises()
        if (data) setExercises(data.exercises)
        if (error) setError(error)

      setIsFetching(false)
    }

    fetchExercises()
  }, [])

  // handles the persistent user token 
  useEffect(() => {
    const fetchUser = async() => {
      const {data,error} = await apiClient.fetchUserFromToken()
      //everytime refresh page, app makes an api request above
      if (data) setUser(data.user)
      if (error) setError(error)
    }
    const token = localStorage.getItem("life_tracker_token")
    if (token) {
      apiClient.setToken(token)
      fetchUser()
    }

  }, [])

  const addExercise = (newPost) => {
    setExercises((oldPosts) => [newPost, ...oldPosts])
  }

  const updatePost = ({ postId, postUpdate }) => {
    setExercises((oldPosts) => {
      return oldPosts.map((post) => {
        if (post.id === Number(postId)) {
          return { ...post, ...postUpdate }
        }

        return post
      })
    })
  }

  // handles the logout
  const handleLogout = async () => {
    await apiClient.logoutUser()
    setUser({})
    // setExercises([])
    setError(null)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout}/>
        <Routes>
          <Route
            path="/"
            element={<Home user={user} error={error} exercises={exercises} addExercise={addExercise} isFetching={isFetching} />}
          />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/register" element={<Register user={user} setUser={setUser} />} />
          <Route path="/exercises/:postId" element={<PostDetail user={user} updatePost={updatePost} />} />
          <Route path="*" element={<NotFound user={user} error={error} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
