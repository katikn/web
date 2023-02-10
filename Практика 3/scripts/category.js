const Anecdote = require('../models/anecdote')
function update() {
    var select = document.getElementById('sortselection')
    let option = select.options[select.selectedIndex].value;
    console.log(option);
    console.log(catalog);
    if (option == 1) {
        Anecdote.find({category: 'Для детей'}, function (err, allAnecdotes) {
            if (err) {
                console.log(err);
                return res.sendStatus(400)
            }
            console.log(allAnecdotes);
            console.log(1);
        })
        // sortonpage(1);
    } else if (option == 2) {
        catalog.sort((a, b) => {
            if (a.price > b.price) {
                return -1;
            } else if (a.price < b.price) {
                return 1;
            }
            return 0;
        })
        // sortonpage(1);
    } else if (option == 3) {
        catalog.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            }
            return 0;
        })
        // sortonpage(1);
    } else if (option == 4) {
        catalog.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            } else if (a.name < b.name) {
                return 1;
            }
            return 0;
        })
        // sortonpage(1);
    } else if (option == 5) {
        catalog.sort((a, b) => {
            if (a.popularity < b.popularity) {
                return -1;
            } else if (a.popularity > b.popularity) {
                return 1;
            }
            return 0;
        })
        // sortonpage(1);
    } 
}

// function sortonpage(page){
//     let card = document.getElementById("cards");
//     card.innerHTML = '';
//     let page_span = document.getElementById("page");
//     if (page < 1){
//         page = 1;
//     } 
//     if (page > countOfItems) {
//         page = countOfItems;
//     }
//     for (let i = (page - 1) * cards_per_page; i < (page * cards_per_page) && i < catalog.length; i++){
//         if(catalog[i].tradein){
//             card.innerHTML += '<div class="card teal lighten-1 col s4"><div class="card-image"><img height="400px" src="img/' + catalog[i].imgurl + '"><a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">%</i></a> </div><div class="card-content white-text"><span class="card-title">' + catalog[i].name + '</span><p>' + catalog[i].publisher + '    |   ' + catalog[i].popularity + '/5 ★</p><br><p>' + catalog[i].price + '₽</p></div><div class="card-action"><a href="#">Перейти к товару</a></div></div>'
//         } else {
//             card.innerHTML += '<div class="card teal lighten-1 col s4"><div class="card-image"><img height="400px" src="img/' + catalog[i].imgurl + '"></div><div class="card-content white-text"><span class="card-title">' + catalog[i].name + '</span><p>' + catalog[i].publisher + '    |   ' + catalog[i].popularity + '/5 ★</p><br><p>' + catalog[i].price + '₽</p></div><div class="card-action"><a href="#">Перейти к товару</a></div></div>'
//         }
//     }
//     page_span.innerHTML = page + '/' + countOfItems;
// }