const express = require('express');
const app = express();
const PORT = 3000;

const moviesRouter = require('./routes/moviesRoute')




app.use('/movies', moviesRouter)

// Start the server
app.get('/', (req, res) => {
    res.send('hello webapp-express')
})

//first route
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


//Prepariamo una rotta index per ottenere la lista dei film
//Prepariamo una rotta show per ottenere i dettagli di un singolo film e le sue recensioni

// route for all movies-INDEX

// app.get('/movies', (req, res) => {
//     res.send('all movies')
// })


// route for movies ID-SHOW

// app.get('/movies/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     res.send(`select movies with ID:${id}`)
// })




