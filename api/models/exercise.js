const db = require("../db")

class Exercise {
  static async listExercises() {
    const result = await db.query(`
      SELECT id, name, category, duration, intensity
      FROM exercise;
    `)
    return result.rows
  }
}

module.exports = Exercise
