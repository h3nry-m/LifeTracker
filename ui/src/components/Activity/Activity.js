import Post from "../Post/Post";
import { Link } from "react-router-dom";
import "./Activity.css";
import apiClient from "../services/apiClient";
import { useState, useEffect } from "react";
import NotAllowed from "../NotAllowed/NotAllowed";

export default function Activity({ user }) {
  const [summaryExercise, setSummaryExercise] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const activityExercises = async () => {
      const { data, error } = await apiClient.activityExercises(user);
      try {
        data &&
          setSummaryExercise({
            avgDuration: +data.avgDuration.avg,
            totalDuration: +data.totalDuration.sum,
          });
      } catch (error) {
        setError(error);
      }
    };
    activityExercises();
  }, [user]);

  if (!user) {
    return <NotAllowed />;
  }
  return (
    <div className="Activity">
      <h1 className="intro">All Activities</h1>
      <span>{user.first_name}'s Activity</span>

      <div className="feed">
        <span>Average duration: {summaryExercise.avgDuration} minutes</span>
        <span>Total duration: {summaryExercise.totalDuration} minutes</span>
      </div>
    </div>
  );
}
