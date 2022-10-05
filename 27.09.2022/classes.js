// class Orange{
//     constructor(rad=5) {
//         this.name = "Апельсин"
//         this.radius = rad
//     }//def __init__ 

//     fall() {
//         return this.name + " упал :("
//     }

//     size() {
//         return 4/3 * Math.PI * (this.radius ** 3)
//     }

//     test(or) {
//         let V1 = 4/3 * Math.PI * (this.radius ** 3)
//         let V2 = 4/3 * Math.PI * (or.radius ** 3)
//         return V1 + V2
//     }
// };

// let orange1 = new Orange(7.5);
// let orange2 = new Orange();

// console.log(orange1.name);
// console.log(orange1.fall());
// console.log(orange1.test(orange2));

class Warrior {
    constructor(name) {
        this.health = 100
        this.name = name
        this.strength = 20
    }

    attack(or) {
        or.health = or.health - this.strength
        console.log(or.name + "(" + or.health + "hp) was attacked by " + this.name + "(" + this.health + "hp)");
    }

    dodge(or) {
        console.log(this.name + "(" + this.health + "hp) tried to attack " + or.name + "(" + or.health + "hp), but he dodged it");
    }
}
// let warrior1 = new Warrior("Antony")
// let warrior2 = new Warrior("Ynotna")
// while (warrior1.health > 0 && warrior2.health > 0){
//     let b = Math.round(Math.random(0, 1))
//     let dodge = Math.random(0, 1)
//     if (b == 0) {
//         if (dodge < 0.3){
//             warrior1.dodge(warrior2)
//         } else {
//             warrior1.attack(warrior2)
//         }
//     } else if (b == 1) {
//         if (dodge < 0.3){
//             warrior2.dodge(warrior1)
//         } else {
//             warrior2.attack(warrior1)
//         }
//     }
// // }
// if (warrior1.health == 0) {
//     console.log(warrior2.name + " wins!");
// } else {
//     console.log(warrior1.name + " wins!");
// }

class Person {
    constructor(name, surname, qualification=1){
        this.name = name
        this.surname = surname
        this.qualification = qualification
        this.worker = true
    }

    get info(){
        return `Full Name: ${this.name} ${this.surname}; \n Qualification: ${this.qualification} \n`
    }

    worker_fire(){
        this.worker = false
        return "Good bye, Sir " + this.name + ' ' + this.surname
    }
}

let Worker1 = new Person('Anton', 'Petrov', )
let Worker2 = new Person('Ivan', 'Ivanov', 4)
let Worker3 = new Person('Vladimir', 'Ovechkin', 4)
console.log(Worker1.info, Worker2.info, Worker3.info);
if (Worker2.qualification > Worker1.qualification && Worker3.qualification > Worker1.qualification){
    alert(Worker1.worker_fire())
} else if (Worker1.qualification > Worker2.qualification && Worker3.qualification > Worker2.qualification){
    alert(Worker2.worker_fire())
} else {
    alert(Worker3.worker_fire())
}
