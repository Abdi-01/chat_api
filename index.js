const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 3333

const app = express()
app.use(bodyParser())
app.use(cors())

// Konfigurasi socket server
const server = http.createServer(app)
const io = socketIO(server)
let arrMsg = []
app.io = io
app.arrMsg = arrMsg

app.get('/', (req, res) => {
    res.status(200).send(`<h1>Selamat datang di Chat API</h1>`)
})

const { chatRouter } = require('./routers')
app.use('/chat', chatRouter)

let user = []

io.on('connection', socket => {

    // emit : untuk mengirimkan pesan yang diarahkan sesuai eventKey
    socket.on('JoinChat', data => {
        // let check = user.filter(item => item.nama.toLowerCase() == data.nama.toLowerCase())
        // console.log()
        // if (!check.length!=0) {
        user.push({ userId: socket.id, nama: data.nama })
        //     io.emit('user connected', user.length)
        //     console.log(user)
        //     io.emit('userCheck', true)
        // } else {
        //     io.emit('userCheck', false)
        // }
    })
    socket.on('disconnect', () => {
        // userCount--
        // io.emit('user connected', userCount)
    })
})


server.listen(PORT, () => console.log('Connected to :', PORT))