const express = require('express');
const app = express();
const PORT = 3000;



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