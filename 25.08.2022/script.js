// let arr = [1, 2]
// let [elem1, elem2] = arr

// console.log(typeof(elem1));

// function getKey(){
//     return ["secret key", "127.0.0.1"]
// }

// let [key, address] = getKey();


// let coords = [[1, 2], [3, 5]];
// for (let [x, y] of coords) {
//     console.log(x, '-', y);
// }

// let cor = [[1, 2, 3], [4, 5, 6]];
// for (let [x, , y] of cor){
//     console.log(x, '-', y);
// }

// let test = {title: 'test', desc: 'test2'};
// for (let [key, value] of Object.entries(test)){
//     console.log(key, '-', value);
// }


// let [name1, name2, ...data] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(data);

// let [namee1, namee2="Caesar"] = ["Julius"]
// console.log(namee1, namee2);

// let {var2:v, var1:v2} = {var1:1, var2:2}
// console.log(v, v2);

// let user = {
//     name: "John",
//     years: 30
// };

// let {name: name, years: age, isAdmin=false} = user

// console.log(name);
// console.log(age);
// console.log(isAdmin);

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(salaries){
//     a = 0
//     aname = null;
//     for (let [name, value] of Object.entries(salaries)){
//         if (value > a) {
//             a = value;
//             aname = name
//         }
//     }
//     return aname;
// }

// console.log(topSalary(salaries));

unzip([['a', 1, true], ['b', 2, false]])

function unzip(arr){
    new_arr = []
    for (a of arr){
        for (i of a){
            if (typeof(i) == Number){
                
            }
        }
    }
    
}