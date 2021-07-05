const { model, Schema } = require('mongoose')

const Exercise = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter the type of exercise'
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter the exercise name'
      },
      duration: {
        type: Number,
        required: 'How long did it take?'
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
},
{
  toJSON: {
    virtuals: true
  }
})

Exercise.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration
  }, 0)
})

module.exports = model('Exercise', Exercise)