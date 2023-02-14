const socket = io();
$('#send').click(() => {
    console.log(1111111);
    socket.emit("hello", "world")
})

socket.on("conn", (data) => {
    console.log(data);
})