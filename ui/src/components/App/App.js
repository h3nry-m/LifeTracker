import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import apiClient from "../services/apiClient";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
// import PostDetail from "../PostDetail/PostDetail";
import NotFound from "../NotFound/NotFound";
import Exercise from "../Exercise/Exercise";
import NewExerciseForm from "../NewExerciseForm/NewExerciseForm";
import Activity from "../Activity/Activity";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [exercises, setExercises] = useState([]);
  // const [summaryExercise, setSummaryExercise] = useState({});
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  // can add exercises correctly
  // now want to display all exercises
  // then move it so that they live in different links

  // handles the persistent user token
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      //everytime refresh page, app makes an api request above
      if (data) setUser(data.user);
      if (error) setError(error);
    };
    const token = localStorage.getItem("life_tracker_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, []);

  // will display all exercises
  useEffect(() => {
    const fetchExercises = async () => {
      setIsFetching(true);

      const { data, error } = await apiClient.listUserExercises(user);
      if (data) setExercises(data.exercises);
      if (error) setError(error);

      setIsFetching(false);
    };

    fetchExercises();
  }, [user]);

  // console.log(summaryExercise)

  const addExercise = (newExercises) => {
    setExercises((oldExercises) => [...oldExercises, newExercises]);
  };

  // const updatePost = ({ postId, postUpdate }) => {
  //   setExercises((oldExercises) => {
  //     return oldExercises.map((post) => {
  //       if (post.id === Number(postId)) {
  //         return { ...post, ...postUpdate }
  //       }

  //       return post
  //     })
  //   })
  // }

  // handles the logout
  const handleLogout = async () => {
    await apiClient.logoutUser();
    setUser(null);
    // setExercises([])
    setError(null);
  };

  // need to make a home one then move the hero and about to only home so that
  //it doesn't show up every page

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity user={user} />} />
          <Route
            path="/exercise"
            element={
              <Exercise
                user={user}
                error={error}
                exercises={exercises}
                isFetching={isFetching}
                addExercise={addExercise}
              />
            }
          />
          <Route
            path="/exercise/create"
            element={<NewExerciseForm user={user} addExercise={addExercise} exercises={exercises}/>}
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route
            path="/register"
            element={<Register user={user} setUser={setUser} />}
          />
          <Route path="*" element={<NotFound user={user} error={error} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// {/* <Route path="/exercises/:postId" element={<PostDetail user={user} updatePost={updatePost} />} /> */}
