import "./Activity.css";
import apiClient from "../services/apiClient";
import { useState, useEffect } from "react";
import NotAllowed from "../NotAllowed/NotAllowed";
import { formatRating } from "../../utils/format"

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
      <h8 className="intro">Activities</h8>
      <span>{user.first_name}'s Activity</span>

      <div className="feed">
        <span>Average duration: {formatRating(summaryExercise.avgDuration)} minutes</span>
        <span>Total duration: {summaryExercise.totalDuration} minutes</span>
      </div>
    </div>
  );
}
