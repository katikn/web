//1. Организовать хранение информации
//2. Реализовать функции CRUD

let catalog = [
    {
        "id": 1, 
        "author": "Mayakovskiy", 
        "name": "xz", 
        "year": 1829
    },
    {
        "id": 2, 
        "author": "Pushkin", 
        "name": "Onegin", 
        "year": 1782
    },
    {
        "id": 3, 
        "author": "Chehov", 
        "name": "Dom", 
        "year": 1301
    },
];

function ecreate() {
    let id = document.getElementById("createId").value;
    let author = document.getElementById("createAuthor").value;
    let name = document.getElementById("createName").value;
    let year = document.getElementById("createYear").value;
    let checkId = false;
    catalog.forEach(function(book) {
        if (book.id == id) {
            checkId = true;
        }
    })
    if (checkId) {
        return "Перезапишите id";
    } else {
        catalog.push({
            "id": Number(id), 
            "author": author, 
            "name": name, 
            "year": Number(year)
        });
        return "Всё норм";
    }
};

function edelete() {
    let id = document.getElementById("deleteId").value;
    let deleteId = false;
    let ind = 0;
    catalog.forEach(function(book, index) {
        if (book.id == id){
            deleteId = true;
            ind = index;
            console.log(book);
        }
    })
    if (deleteId) {
        delete(catalog[ind]);
        console.log(catalog);
        return "Книга удалена"
    }
}
function eupdate() {
    let id = document.getElementById("updateId").value;
    let author = document.getElementById("updateAuthor").value;
    let name = document.getElementById("updateName").value;
    let year = document.getElementById("updateYear").value;
    let updateId = false;
    let ind = 0;
    catalog.forEach(function(book, index) {
        if (book.id == id){
            updateId = true;
            ind = index;
        }
    })
    if (updateId) {
        delete(catalog[ind]);
        catalog[ind] = {
            "id": Number(id), 
            "author": author, 
            "name": name,
            "year": Number(year)
        };
        console.log(catalog);
    }
};
function eread() {
    let id = document.getElementById("readId").value;
    let author = document.getElementById("readAuthor").value;
    let name = document.getElementById("readName").value;
    let year = document.getElementById("readYear").value;
    let ind = 0;
    catalog.forEach(function(book, index) {
        if (book.id == id){
            ind = index
        } else if (book.author == author) {
            ind = index
        } else if (book.name == name) {
            ind = index
        } else if (book.year = year) {
            ind = index
        }
    })
    let card = document.getElementById("cards");
    if (ind != 0){
        card.innerHTML = catalog[ind][id] + '<br>' + catalog[ind][author] + '<br>' + catalog[ind][name] + '<br>' + catalog[ind][year]
    }
};


console.log(catalog);
