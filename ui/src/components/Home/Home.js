import Post from "../Post/Post"
import NewExerciseForm from "../NewExerciseForm/NewExerciseForm"
import "./Home.css"

export default function Home({ user, isFetching, exercises, addExercise, error }) {
  return (
    <div className="Home">
      <h1 className="intro">All Exercises</h1>

      <NewExerciseForm user={user} addExercise={addExercise} />

      <div className="feed">
        {error ? <h2 className="error">{error}</h2> : null}
        {isFetching ? <h2>Loading...</h2> : null}
        {exercises?.map((post) => (
          <Post post={post} key={post.id} user={user} />
        ))}
      </div>
    </div>
  )
}
