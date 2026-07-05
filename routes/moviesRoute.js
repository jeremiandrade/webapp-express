const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/moviesController')



//route for all movies-INDEX
router.get('/', moviesController.index)

// router.get('/movies', (req, res) => {
//     res.send('all movies')
// })


// route for movies ID-SHOW
router.get('/:id', moviesController.show)



// router.get('/movies/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     res.send(`select movies with ID:${id}`)
// })

module.exports = router