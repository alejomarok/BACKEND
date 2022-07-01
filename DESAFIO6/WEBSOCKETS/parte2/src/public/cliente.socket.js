const socket = io()
const formMessage = document.querySelector('#formMessage')
const inputMessage = document.querySelector('#inputMessage')
const p = document.querySelector('p')

formMessage.addEventListener('submit', event =>{
     event.preventDefault()

     const message = inputMessage.value
     socket.emit('cliente:mensaje', message)
})

socket.on('server:mensaje', message =>{
       p.innerHTML = message
})