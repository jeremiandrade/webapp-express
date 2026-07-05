const serverError500 = ((err, re, res, next) => {
    console.error(err.stack);
    res.status(500).json({ erro: 'Something went wrong!' })

})

module.exports = serverError500