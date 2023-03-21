const socket = io();

let room = ""; //id комнаты, куда будем писать

function inputMsg(text, nick="You", private=false){
    let msgChat = $("<p>")
        .append($("<span class='nick'>").text(nick + ":"))
        .append($("<span class='text'>").text(text))
    // if (private){
    //     msgChat.append($("<i>").text(" /Приватное сообщение"))
    // }
    $('.chat-win').append(msgChat)
}

function send(){
    let msg = $('#message').val()
    let username = $('#username').val()
    var regex = /[a-zA-Z0-9]/g;
    if (msg.match(regex).length) {
        let array = msg.split(' ')
        if (array[0] == '/tell'){
            room = array[1];
            array = array.slice(2); 
            array.push('/Приватное сообщение')
            inputMsg(array.join(' '), username, true);
        } else {
            inputMsg(array.join(' '), username);
        }
        socket.emit("newMsg", { text: array.join(' '), room: room, name: username });
        room = ''
    }
    $('#message').val('');
}

function joinRoom(roomId){
    room = roomId;
    socket.emit('joinToRoom', {
        id: roomId
    })
}

$('#send').click(send)
$('#message').keypress(function (e) {
    var key = e.which;
    if (key == 13){
        send()
    }
})

$('.room-btn').click((e) => {
    let roomId = e.target.id
    joinRoom(roomId)
})

$('#newuser').click(() => {
    let roomId = $('#username').val()
    joinRoom(roomId)
})

socket.on("newMsg", (data) => {
    inputMsg(data.text, data.nick)
})

socket.on("conn", (data) => {
    console.log(data);
})

socket.on('connectToRoom', (data) => {
    inputMsg(data.text, 'Admin')
})