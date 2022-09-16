let student = {
    firstName: "Антон", //Свойство firstName со значением Антон
    class: 10,
    get fullinfo() { // геттер fullinfo
        return `${this.firstName} учится в ${this.class}${this.letter} классе`
    },
    set changeclass(newclass) {
        if (newclass < 1 || newclass > 11){
            console.log('Такого класса нет лол');
            return;
        }
        this.class = newclass;
    },
    get age(){
        return this._age;
    },
    set age(val){
        if (val < 5 || val > 18) {
            console.log('Школа закрыта тебе кеееееек');
            return;
        }
        this._age = val
    }
}

student['letter'] = 'A'

// console.log(student.letter);
// console.log(student.fullinfo);

// // delete student.class;
// student.changeclass = 12;

// console.log(student);

// student.age = 19 // сеттер
// console.log(student.age); //геттер

let User = {
    get login() {
        return this._login;
    },
    set login(val) {
        if (val.length < 4) {
            console.log('Недопустимый логин (4+ символа)');
            return;
        }
        this._login = val;
    },
    get password() {
        return this._password;
    },
    set password(val) {
        if (val.length < 8 || val.length > 16) {
            console.log("Пароль должен быть от 8 до 16 символов");
            return;
        }
        this._password = val;
    },
    get age() {
        return this._age;
    },
    set age(val) {
        if (val < 5) {
            console.log("Вы должны быть старше 5 лет");
            return;
        }
        this._age = val;
    }
}

User.login = 'ktiknn';
User.password = 12345678;
User.age = 8

// console.log(User.login);
// console.log(User.password);
// console.log(User.age);


function Person(name_, class_) {
    this.name = name_; //свойство
    this.class = class_;

    this.getinfo = function () { //метод объекта Student
        return `Это ученик ${this.name}`
    }
}

let person1 = new Person('Антон', 10);
// let personGerman = new Person('Герман', 2);
// person1['new'] = 1;

Person.prototype.new = 1;
let person2 = new Person('Антон', 10);
console.log(person2);

function Rectangle(width_, height_, posx, posy) {
    if (width_ < 0) {
        this.width = 0;
    } else {
        this.width = width_;
    }
    if (height_ < 0) {
        this.height = 0;
    } else {
        this.height = height_;
    }
    this.posX = posx;
    this.posY = posy;

    this.perimeter = function (){
        return `Периметр равен: ${(this.height + this.width) * 2}`
    }

    this.square = function (){
        return `Площадь равна: ${this.height * this.width}`
    }
}

let rect1 = new Rectangle(2, 2, 500, 500);
let rect2 = new Rectangle(10, -10, 100, 100);
let rect3 = new Rectangle(100, 37, 0, 0);

console.log(rect1, rect1.perimeter(), rect1.square());
console.log(rect2, rect2.perimeter(), rect2.square());
console.log(rect3, rect3.perimeter(), rect3.square());