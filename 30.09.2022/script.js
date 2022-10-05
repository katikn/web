class Table{
    constructor(l, w, h, color="white"){
        this.length = l
        this.width = w
        this.height = h
        this.color = color
    }
    
    square(){
        return this.width * this.length
    }
}
class ComputerTable extends Table {
    constructor(l, w, h, color="black", sm=0.0){
        super(l, w, h, color) //сначала вызываем super для определения конструктора родителя
        this.monitor = sm
    }
    square(){
        return this.width * this.length - this.monitor
    }
}

let table = new ComputerTable(150.5, 62, 54, 150)
console.log(table.square());

class Human {
    constructor(id, team){
        this.id = id
        this.team = team
    }
}

class Hero extends Human{
    constructor(id, team, lvl){
        super(id, team)
        this.lvl = lvl
    }
    level_up(){
        this.lvl += 1
    }
}

class Soldier extends Human{
    follow_my_hero(or){
        return `Soldier ${this.id} is now following Hero ${or.id}`
    }
}

let team1 = [];
let team2 = [];

let Hero1 = new Hero(1, 1, 1)
let Hero2 = new Hero(2, 2, 1)
team1.push(Hero1)
team2.push(Hero2)
for(let i = 1; i <= 10; i++){
    let a = Math.round(Math.random(1, 2))
    let soldier = new Soldier(i, a)
    if (a == 1){
        team1.push(soldier)
    } else {
        team2.push(soldier)
    }
}
while (team1.length != 1 && team2.length != 1){
    console.log(`Team1 now has ${team1.length - 1} soldiers \nTeam2 now has ${team2.length - 1} soldiers`);
    if (team1.length - 1 > team2.length - 1) {
        Hero1.level_up()
        console.log(team1[-1].follow_my_hero(Hero1));
    } else {
        Hero2.level_up()
        console.log(team2[-1].follow_my_hero(Hero2));
    }
}



