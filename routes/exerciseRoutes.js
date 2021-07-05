const router = require('express').Router()
const { Exercise } = require('../models')

// GET all exercises
router.get('/api/exercises', (req, res) => Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => console.log(err)))

// GET one exercise
router.get('/api/exercises/:id', (req, res) => Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => console.log(err)))

// GET with range
router.get('/api/exercises/range', (req, res) => {
    Exercise.find().limit(7)
    .then(exercises => res.json(exercises))
    .catch(err => console.log(err))
})

// POST one exercise
router.post('/api/exercises', (req, res) => Exercise.create(req.body)
    .then(exercise => res.json(exercise))
    .catch(err => console.log(err)))

// PUT one exercise
router.put('/api/exercises/:id', (req, res) => Exercise.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err)))

// DELETE one exercise
router.delete('/api/exercises/:id', (req, res) => Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.sendStatus(200))
      .catch(err => console.log(err)))

module.exports = router
