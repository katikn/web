let catalog = [
    {
        "id": 1,
        "name": "Animal Crossing: New Horizons [Switch]",
        "publisher": "Nintendo",
        "price": 4990,
        "platform": "Switch",
        "date": "2020-03-20",
        "popularity": 5,
        "imgurl": "3cb8ec0e8d911d0e13995f733740b49d.jpg",
        "tradein": false
    },
    {
        "id": 2,
        "name": "Cyberpunk 2077 [Xbox One]",
        "publisher": "CD PROJEKT RED",
        "price": 3990,
        "platform": "Xbox One",
        "date": "2020-12-10",
        "popularity": 4.6,
        "imgurl": "5d75557ec01b79d5401f2569bdbd482b.jpg",
        "tradein": false
    },
    {
        "id": 3,
        "name": "Watch Dogs: Legion [PS4]",
        "publisher": "Ubisoft",
        "price": 3399,
        "platform": "PS4",
        "date": "2020-10-29",
        "popularity": 5,
        "imgurl": "36044e416feec885f9df9cdb6888ee11.jpg",
        "tradein": false
    },
    {
        "id": 4,
        "name": "Grand Theft Auto V (GTA 5) [PS4]",
        "publisher": "Rockstar Games",
        "price": 2495,
        "platform": "PS4",
        "date": "2014-11-18",
        "popularity": 4.8,
        "imgurl": "71c9935a0767cf9fff254da7e2dd1155.jpg",
        "tradein": true
    },
    {
        "id": 5,
        "name": "Disney: Храбрая сердцем [PC]",
        "publisher": "Disney Interactive",
        "price": 199,
        "platform": "PC",
        "date": "2012-06-21",
        "popularity": 3,
        "imgurl": "8267ce35135214b60bac03bd8e231097.jpg",
        "tradein": false
    }
]

let catalog_copy = catalog.slice();

let current_page = 1;
let cards_per_page = 3;
let countOfItems = Math.ceil(catalog.length / cards_per_page);
console.log(countOfItems);
function prevPage(){
    if (current_page > 1) {
        current_page--;
        sortonpage(current_page);
    }
}

function nextPage(){
    if (current_page < countOfItems) {
        current_page++;
        sortonpage(current_page);
    }
}

function sortonpage(page){
    let card = document.getElementById("cards");
    card.innerHTML = '';
    let page_span = document.getElementById("page");
    if (page < 1){
        page = 1;
    } 
    if (page > countOfItems) {
        page = countOfItems;
    }
    for (let i = (page - 1) * cards_per_page; i < (page * cards_per_page) && i < catalog.length; i++){
        if(catalog[i].tradein){
            card.innerHTML += '<div class="card teal lighten-1 col s4"><div class="card-image"><img height="400px" src="img/' + catalog[i].imgurl + '"><a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">%</i></a> </div><div class="card-content white-text"><span class="card-title">' + catalog[i].name + '</span><p>' + catalog[i].publisher + '    |   ' + catalog[i].popularity + '/5 ★</p><br><p>' + catalog[i].price + '₽</p></div><div class="card-action"><a href="#">Перейти к товару</a></div></div>'
        } else {
            card.innerHTML += '<div class="card teal lighten-1 col s4"><div class="card-image"><img height="400px" src="img/' + catalog[i].imgurl + '"></div><div class="card-content white-text"><span class="card-title">' + catalog[i].name + '</span><p>' + catalog[i].publisher + '    |   ' + catalog[i].popularity + '/5 ★</p><br><p>' + catalog[i].price + '₽</p></div><div class="card-action"><a href="#">Перейти к товару</a></div></div>'
        }
    }
    page_span.innerHTML = page + '/' + countOfItems;
}

function update() {
    var select = document.getElementById('sortselection')
    let option = select.options[select.selectedIndex].value;
    console.log(option);
    console.log(catalog);
    if (option == 1) {
        catalog.sort((a, b) => {
            if (a.price < b.price) {
                return -1;
            } else if (a.price > b.price) {
                return 1;
            }
            return 0;
        })
        sortonpage(1);
    } else if (option == 2) {
        catalog.sort((a, b) => {
            if (a.price > b.price) {
                return -1;
            } else if (a.price < b.price) {
                return 1;
            }
            return 0;
        })
        sortonpage(1);
    } else if (option == 3) {
        catalog.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            }
            return 0;
        })
        sortonpage(1);
    } else if (option == 4) {
        catalog.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            } else if (a.name < b.name) {
                return 1;
            }
            return 0;
        })
        sortonpage(1);
    } else if (option == 5) {
        catalog.sort((a, b) => {
            if (a.popularity < b.popularity) {
                return -1;
            } else if (a.popularity > b.popularity) {
                return 1;
            }
            return 0;
        })
        sortonpage(1);
    } else if (option == 6) {
        catalog.sort((a, b) => {
            if (a.popularity > b.popularity) {
                return -1;
            } else if (a.popularity < b.popularity) {
                return 1;
            }
            return 0;
        })
        sortonpage(1);
    }
}

function updateRange(){
    let range1 = document.getElementById("Range1").value;
    let range2 = document.getElementById("Range2").value;
    catalog.forEach((game, index) => {
        if (game.price <= range1 || game.price >= range2) {
            delete(catalog[index]);
        }
    })
    sortonpage(1);
}

function resetRange(){
    catalog = catalog_copy.slice()
    sortonpage(1);
}

// let comp = document.getElementById("companies");
// catalog_copy.forEach((game) => {
//     comp.innerHTML += '<p><label><input class="messageCheckbox" type="checkbox" value="' + game.id + '"/><span>' + game.publisher + '</span></label></p>'
// })

sortonpage(1);


