// // What is "x ? y : y1"

// let x = "sort";
// // let z;
// // if (x == "sort"){
// //     z = 1;
// // } else {
// //     z = 0;
// // };
// let z = x == "sort" ? 1 : 0;
// console.log(z);

let mass = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < mass.length; i++) {
    console.log(mass[i]);
};

for (let index in mass) {
    // console.log(index); //индексы элементов массива mass
    console.log(mass[index]); //выведет то же самое, что и на 16 строке
};

for (let elem of mass) {
    console.log(elem); //сами элементы массива 
}

mass.forEach((elem, key) => {
    console.log(elem, key);
})

// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// fruits.sort().reverse() //Сортировка по алфавиту и разворот массива

// fruits.sort().sort((data, data1) => {
//     console.log(data.length, data1.length, data.length - data1.length);
//     return data.length - data1.length
// })
// console.log(fruits);

const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.sort().reverse() //Сортировка по алфавиту и разворот массива

function sortfunction(data, data1) {
    console.log(data.length, data1.length, data.length - data1.length);
    return data.length - data1.length
}
fruits.sort(sortfunction)
console.log(fruits);

let heights = [160, 162, 178, 152, 168, 173, 176, 170]
function sortheights(data) {
    if(data < 170) {
        return -1;
    } else {
        return 1;
    }
}

heights.sort(sortheights)
console.log(heights);

let pupils = [
    {name: "Миша", age: 23},
    {name: "Вася", age: 44},
    {name: "Антоха", age: 44},
    {name: "Саша", age: 2},
    {name: "Рома", age: 99},
    {name: "Ашот", age: 19}
];

pupils.sort((a, b) => {
    console.log(a.age, b.age);
    if (a.age < b.age){
        return -1;
    } else if (a.age == b.age) {
        if (a.name < b.name) {
            return -1
        }
    }
    return 0;
})

console.log(pupils);