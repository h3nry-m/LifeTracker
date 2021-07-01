import { Link } from "react-router-dom";
import { formatRating, formatDate } from "../../utils/format";
// import "./Post.css"

export default function Post({ exercise, user }) {
  // const userOwnsPost = user?.email && exercise?.userEmail === user?.email
  return (
    <div className="test">
      <div>
        <span>{user.first_name}</span>
      </div>
      <ul>
        <li>Name: {exercise.exercisename}</li>
        <li>Duration: {exercise.duration}</li>
        <li>Intensity: {exercise.intensity}</li>
      </ul>
    </div>
  );
}
