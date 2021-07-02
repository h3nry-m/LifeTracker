import Post from "../Post/Post"
import { Link } from "react-router-dom";
import NewExerciseForm from "../NewExerciseForm/NewExerciseForm"
import "./Exercise.css"
import NotAllowed from "../NotAllowed/NotAllowed";
export default function Exercise({ user, isFetching, exercises, error }) {
  if (!user) {
    return <NotAllowed />
  }
  return (
    <div className="Exercise">
      <h1 className="intro">All Exercises</h1>

      {/* <NewExerciseForm user={user} addExercise={addExercise} /> */}
      <Link to="create">
        <button>Add New Exercise</button>
        </Link>
      <div className="feed">
        {/* {error ? <h2 className="error">{error}</h2> : null} */}
        {isFetching ? <h2>Loading...</h2> : null}
        {exercises?.map((exercise) => (
          <Post exercise={exercise} key={exercise.id} user={user} />
        ))}
      </div>
    </div>
  )
}
