const connection = require('../database/connection')

//route for all movies-index

const index = (req, res) => {
    //preparo la query
    const sql = 'SELECT * FROM MOVIES'

    // eseguo la query
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        res.json(results)
    })

}

//route for movies ID-show

const show = (req, res) => {
    //recuperiamo l'id dall'URL
    const id = req.params.id

    const sql = 'SELECT * FROM movies WHERE id=?'
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'database query failed' })
        if (results.length === 0) return res.status(404).json({ error: 'movies not found' })
        res.json(results[0])
    })

}

module.exports = { index, show }



