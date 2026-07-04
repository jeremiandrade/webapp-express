const express = require('express')
const router = express.Router()



//route for all movies-INDEX
router.get('/movies', (req, res) => {
    res.send('all movies')
})


// route for movies ID-SHOW

router.get('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`select movies with ID:${id}`)
})

module.exports = router