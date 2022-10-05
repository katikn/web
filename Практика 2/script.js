import {Card, TaskCards} from './modules.js'
let cards = new TaskCards()

$("document").ready(function() {
    $(".dragg").draggable({
        revert: true
    });
  
    $(".current-tasks").droppable({
        accept: '.dragg',
        drop: function(event, ui) {
            $(this).append($(ui.draggable));
        }
    });
    $(".completed-tasks").droppable({
        accept: '.dragg',
        drop: function(event, ui) {
            $(this).append($(ui.draggable));
            cards.tickCompleted(card)
        }
    });
});

$("#createcard").click(function() {
    let newTitle = document.getElementById("newTitle").value;
    let newDesc = document.getElementById("newDescription").value;
    let card = new Card(newTitle, newDesc)
    cards.appnd(card)
    $(".current-tasks").append(card.create())
    $(".dragg").draggable({
        revert: true
    });
    console.log(cards);
});

$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы   
    $("#zatemn").hide(); 
    $("#popup1").hide();
});
//Функция отображения PopUp
$('#first-card').click(function() {
    $("#popup1").show();
    $("#zatemn").show();
});

$('#popupcard').click(function() {
    $("#popup1").hide();
    $("#zatemn").hide();
});

$('.del').on('click', function(){
    $(this).parent().remove();
});

$('.check').on('click', function(){
    $(this).parent().remove()
    console.log($(this));
    $(".completed-tasks").append(card.create())
})