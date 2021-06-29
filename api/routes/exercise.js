const express = require("express")
const Exercise = require("../models/exercise")
const router = express.Router()
const security = require("../middleware/security")

router.get("/", async (req, res, next) => {
    try {
      const { user } = res.locals
      const exercises = await Exercise.listAllExercises()
      return res.status(200).json({ exercises })
    } catch (err) {
      next(err)
    }
  })




router.post('/create', security.requireAuthenticatedUser, async (req,res,next) => {
    try {
        const { user } = res.locals
        const exercise = await Exercise.createNewExercise({user, exercise: req.body})
        return res.status(201).json({exercise})
    } catch (error) {
        next(error)
    }
})


module.exports = router
