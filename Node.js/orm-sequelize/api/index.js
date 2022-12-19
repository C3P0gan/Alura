const express = require('express')
const routes = require('./routes')


// instance express
const app = express()
const port = 3000

// import routes
routes(app)

app.listen(port, () => console.log(
    `O servidor está rodando na porta ${port}`
    )
)

module.exports = app
