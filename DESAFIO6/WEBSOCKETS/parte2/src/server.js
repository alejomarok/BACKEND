require('dotenv').config()
const express = require('express')
const app = express()
const puerto= process.env.PUERTO
const { Server: IOServer } = require('socket.io')

const expressServer = app.listen(puerto, (error) =>{
    if(error ){
        console.log(error)
    }else{
        console.log(`escuchando puerto ${puerto}`)
    }
})
const io = new IOServer(expressServer)

io.on('connection', socket =>{
    console.log('se conecto un usuario ID:', socket.id)


    socket.on('cliente:mensaje', message =>{
        io.emit('server:mensaje', message)
    })
})

app.use(express.static(__dirname + '/public'))