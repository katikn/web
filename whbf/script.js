var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);


let points = 30;
let chars = [0, 0, 0, 0];
$('#hp').val(chars[0])
$('#strength').val(chars[1])

$("#plushp").click(function () {
    if (points != 0) {
        chars[0] += 1
        points -= 1
    }
    $('#hp').val(chars[0])
    $('#points').html(points)
})

$("#minushp").click(function () {
    if (chars[0] > 0){
        chars[0] -= 1
        points += 1
    }
    $('#hp').val(chars[0])
    $('#points').html(points)
})

$("#plusstrength").click(function () {
    if (points != 0) {
        chars[1] += 1
        points -= 1
    }
    $('#strength').val(chars[1])
    $('#points').html(points)
})

$("#minusstrength").click(function () {
    if (chars[1] > 0) {
        chars[1] -= 1
        points += 1
    }
    $('#strength').val(chars[1])
    $('#points').html(points)
})