const express = require('express');
const app = express();
const PORT = 3000;
const moviesRouter = require('./routes/moviesRoute')
const serverError500 = require('./middleware/serverError500')
const notFound404 = require('./middleware/notFound404')




app.use('/movies', moviesRouter)

app.use(express.static('public'))

// Start the server
app.get('/', (req, res) => {
    res.send('hello webapp-express')
})

//server-error
app.use(serverError500)

//not-found
app.use(notFound404)

//first route
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



// route for all movies-INDEX

// app.get('/movies', (req, res) => {
//     res.send('all movies')
// })


// route for movies ID-SHOW

// app.get('/movies/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     res.send(`select movies with ID:${id}`)
// })




