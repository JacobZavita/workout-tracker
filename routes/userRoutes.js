const router = require('express').Router()
const { User, Exercise } = require('../models')

router.post('users/register', (req, res) => {
  const { username, email } = req.body
  User.register(new User({ username, email }), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// router.post('users/login', (req, res) => {
//   User.authenticate()(req.body.username, req.body.password, (err, user) => {
//     if (err) { console.log(err) }
//     res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
//   })
// })

// GET all user
router.get('/users', (req, res) => User.find()
  .then(user=> res.json(user))
  .catch(err => console.log(err)))

// GET one user
router.get('/user', (req, res) => res.json(req.user))

// PUT one user
router.put('/users', (req, res) => User.findByIdAndUpdate(req.user._id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err)))

// DELETE one user
router.delete('/users', (req, res) => User.findByIdAndDelete(req.user._id)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router
