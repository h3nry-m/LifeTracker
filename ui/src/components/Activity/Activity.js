import Post from "../Post/Post";
import { Link } from "react-router-dom";
import "./Activity.css";
import apiClient from "../services/apiClient";
import { useState, useEffect } from "react";

export default function Activity({ user, error, setError }) {
    const [summaryExercise, setSummaryExercise] = useState({});
    useEffect(() => {
        const activityExercises = async () => {
    
          const { data, error } = await apiClient.activityExercises(user);
          try {
            data && setSummaryExercise({avgDuration:+data.avgDuration.avg, totalDuration: +data.totalDuration.sum});
          } catch (error) {
            setError(error)
          }
        };
        activityExercises();
      }, [user]);
    return (
    <div className="Activity">
      <h1 className="intro">All Activities</h1>
      <span>{user.first_name}'s Activity</span>

      <div className="feed">
        <span>{summaryExercise.avgDuration}</span>
      </div>
    </div>
  );
}
