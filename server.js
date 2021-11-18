const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

var corsOptions = {
    origin: 'http://localhost:8081',
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

const db = require('./models')
const Role = db.role
const User = db.user

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db')
    initial()
})

// simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to bezkoder application.' })
})

// routes
require('./routes/auth.routes')(app)
require('./routes/user.routes')(app)

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

    User.create({
        id: 1,
        username: 'admin',
        password: 'admin',
        email: 'admin@app.com',
        roles: ['admin', 'moderator', 'user'],
    })

    User.create({
        id: 2,
        username: 'moderator',
        password: 'moderator',
        email: 'moderator@app.com',
        roles: ['moderator', 'user'],
    })

    User.create({
        id: 3,
        username: 'user',
        password: 'user',
        email: 'user@app.com',
        roles: ['user'],
    })
}
