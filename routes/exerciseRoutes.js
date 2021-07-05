const router = require('express').Router()
const { Exercise } = require('../models')

// GET all exercises
router.get('/exercises', (req, res) => Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => console.log(err)))

// GET one exercise
router.get('/exercises/:id', (req, res) => Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => console.log(err)))

// POST one exercise
router.post('/exercises', (req, res) => Exercise.create(req.body)
    .then(exercise => res.json(exercise))
    .catch(err => console.log(err)))

// PUT one exercise
router.put('/exercises/:id', (req, res) => Exercise.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err)))

// DELETE one exercise
  router.delete('/exercises/:id', (req, res) => Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.sendStatus(200))
      .catch(err => console.log(err)))

module.exports = router
