const express = require('express');
const app = express();
const PORT = 3000;
const connection = require('./database/connection')



// Start the server
app.get('/', (req, res) => {
    res.send('hello webapp-express')
})

//first route
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//Esercizio
//Ciao ragazzi, è ora di mettere alla prova le vostre conoscenze iniziando a costruire la vostra prima app completa! Ecco i primi step

//Utilizzando il file in allegato, creiamo un database con MySQL Workbench
//Creiamo una nuova applicazione Express
//Colleghiamo l’app al db e verifichiamo che tutto funzioni
//Prepariamo una rotta index per ottenere la lista dei film
//Prepariamo una rotta show per ottenere i dettagli di un singolo film e le sue recensioni

//route for all movies-INDEX


app.get('/movies', (req, res) => {
    res.send('all movies')
})


// route for movies ID-SHOW

app.get('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`select movies with ID:${id}`)
})



// app.get('/movies', (req, res) => {
//     //preparo la query
//     const sql = 'SELECT * FROM MOVIES'

//     // eseguo la query
//     connection.query(sql, (err, results) => {
//         if (err) return res.status(500).json({ error: 'Database query failed' })
//         res.json(results)
//     })

// })
