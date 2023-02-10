let catalog = [
    {
        brand: "Honor",
        name: "MagicBook",
        model: "X 15 2021",
        type: "Notebook",
        cost: "750",
        color: "gray"
    },
    {
        brand: "Apple",
        name: "MacBook",
        model: "Air 13 2022",
        type: "Notebook",
        cost: "1300",
        color: "silver"
    }
]


//1. В алфавитном порядке по полю brand
function sortAlph(a, b) {
    if (a.brand < b.brand) {
        return -1;
    } else {
        return 1;
    }
}


//2. По стоимости, от меньшего к большему или наоборот
function sortCost(a, b, decrease=false) {
    if (decrease){
        if (a.cost < b.cost) {
            return -1;
        } else {
            return 1;
        }
    } else {
        if (a.cost > b.cost) {
            return -1;
        } else {
            return 1;
        }
    }
}

let prices = [10, 20]
//3. По стоимости в диапазоне
function sortCostRange(a, b) {
    console.log(b, a);
}

let colors = ["white", "gray"]
//4. По color. В функцию передается массив с цветами.
function sortColors(a, b){
    
}