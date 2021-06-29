const db = require("../db");
const { BadRequestError, NotFoundError } = require("../utils/errors");

class Exercise {
  static async listAllExercises() {
    const result = await db.query(
      `SELECT *
       FROM exercise;
      `
    );
    return result.rows;
  }

  static async listUserExercises({ user }) {
    // list all exercises in the DB in descending order. created at not working
    // something about user not being able to be deconstructed. naybe need the security requireAuthenticatedUser
    const result = await db.query(
      `
      SELECT *
      FROM exercise
      WHERE user_id = $1
    `,
      [user.id]
    );

    return result.rows;
  }

  static async createNewExercise({ exercise, user }) {
    const requiredFields = [
      "exerciseName",
      "category",
      "duration",
      "intensity",
    ];
    requiredFields.forEach((field) => {
      if (!exercise.hasOwnProperty(field)) {
        throw new BadRequestError(
          `Required field - ${field} - missing from request body.`
        );
      }
    });
    // console.log(user)
    const results = await db.query(
      ` 
      INSERT INTO exercise (exerciseName, category, duration, intensity, user_id, created_at)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id,
                category,
                duration,
                intensity,
                user_id,
                created_at
      `,
      [
        exercise.exerciseName,
        exercise.category,
        exercise.duration,
        exercise.intensity,
        user.id,
        exercise.created_at,
      ]
    );
    // console.log(results)
    return results.rows[0];
  }
}

module.exports = Exercise;
