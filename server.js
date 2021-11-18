const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config({ path: path.resolve(process.cwd(), '.env.test') })

const app = express()

var corsOptions = {
    origin: 'http://localhost:8081',
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

const db = require('./src/models')
const Role = db.role
const User = db.user

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db')
    initial()
})

// simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to application.' })
})

// routes
require('./src/routes/auth.routes')(app)
require('./src/routes/user.routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})

function initial() {
    Role.create({
        id: 1,
        name: 'user',
    })

    Role.create({
        id: 2,
        name: 'moderator',
    })

    Role.create({
        id: 3,
        name: 'admin',
    })
}
