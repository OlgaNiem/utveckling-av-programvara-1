const socket = io()
//console.log(socket);
const send = document.getElementById('btn')
send.addEventListener('click', ()=> {
    socket.emit('msg', document.getElementById('msg-input').value)
    document.getElementById('msg-input').value = '' 
}) 

socket.on('msg', (msg) =>{
    document.getElementById('ul').innerHTML += `<li>${msg}</li>`
})