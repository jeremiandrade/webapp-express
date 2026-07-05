const notFound404 = ((req, res) => {
    res.status(404).json({ error: 'Not Found' })
})
module.exports = notFound404