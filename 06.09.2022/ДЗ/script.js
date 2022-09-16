import {Character} from './create_character.js';

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let arr = []
let l = []
$('#submit').click(function() {
    let characterName = document.getElementById('name').value;
    let characterLvl = document.getElementById('lvl').value;
    let image = document.getElementById('image');
    arr.push(characterName)
    arr.push(characterLvl)
    start()
})
function start(){
    let [characterName, characterLvl] = arr;
    arr = [];
    console.log(characterName, characterLvl);
    let character = new Character(characterName, characterLvl);
    ctx.clearRect(0, 0, 500, 650)
    character.showonpage(ctx);
    l.push(character)
}
$('#submit2').click(function() {
    let [character] = l;
    let colorImage = document.getElementById('colorImage').value;
    let colorName = document.getElementById('colorName').value;
    let colorLvl = document.getElementById('colorLvl').value;
    console.log(character);
    if (colorImage) {
        character.card.headerImage = colorImage;
    }
    if (colorName) {
        character.card.colorName = colorName;
    }
    if (colorLvl) {
        character.card.colorLvl = colorLvl;
    }
    ctx.clearRect(0, 0, 500, 650)
    character.showonpage(ctx);
})

$('#sub1').click(function() {
    let [character] = l;
    let changeNamee = document.getElementById('changeName').value;
    character.changeName(changeNamee)
    ctx.clearRect(0, 0, 500, 650)
    character.showonpage(ctx);
})
$('#sub2').click(function() {
    let [character] = l;
    let changeLvll = document.getElementById('changeLvl').value;
    character.changeLvl(changeLvll)
    ctx.clearRect(0, 0, 500, 650)
    character.showonpage(ctx);
})
$('#sub3').click(function() {
    let [character] = l;
    let changeImgg = document.getElementById('changeImg').value;
    character.changeImage(changeImgg)
    ctx.clearRect(0, 0, 500, 650)
    character.showonpage(ctx);
})
$('#sub4').click(function() {
    let [character] = l;
    let changeNameColorr = document.getElementById('changeNameColor').value;
    character.changeNameColor(changeNameColorr)
    ctx.clearRect(0, 0, 500, 650)
    character.showonpage(ctx);
})
$('#sub5').click(function() {
    let [character] = l;
    let changeLvlColorr = document.getElementById('changeLvlColor').value;
    character.changeLvlColor(changeLvlColorr)
    ctx.clearRect(0, 0, 500, 650)
    character.showonpage(ctx);
})
$('#sub6').click(function() {
    let [character] = l;
    let changeImageColorr = document.getElementById('changeImageColor').value;
    character.changeImageColor(changeImageColorr)
    ctx.clearRect(0, 0, 500, 650)
    character.showonpage(ctx);
})
