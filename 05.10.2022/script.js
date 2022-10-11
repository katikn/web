class Circle{
    constructor(r, x = 0, y = 0){
        this.radius = r
        this.x = x
        this.y = y
    }

    circle_move(flag, m, n = 0){
        if (flag == 0){
            this.x = this.x + m
        } else if (flag == 1){
            this.y = this.y + m
        } else if (flag == 2){
            this.x = this.x + m
            this.y = this.y + n
        }
    }

    get_square(){
        return Math.PI * (this.radius ** 2)
    }

    change_radius(r){
        this.radius = r
    }

    change_x(x = 0){
        this.x = x
    }

    change_y(y = 0){
        this.y = y
    }

    print_params(){
        return `Radius: ${this.radius};\nX coord: ${this.x};\nY coord: ${this.y}.`
    }
}

let circle1 = new Circle(20, 100, 20)
let circle2 = new Circle(10, 200, 50)
let circle3 = new Circle(5)
console.log(circle1.get_square() + circle2.get_square() + circle3.get_square());


class Pupil{
    constructor(n, m){
        this.name = n
        this.marks = m
    }

    mean_value_marks(){
        let mean = 0
        for (let i = 0; i < this.marks.length; i++){
            mean += this.marks[i]
        }
        return mean / this.marks.length
    }
}

let pupil1 = new Pupil('Ivanov', [5, 5, 6, 5, 2])
console.log(pupil1.mean_value_marks());

class Task{
    constructor(n, d='Не задано', s='Не задано', e='Не задано'){
        this.name = n;
        this.desc = d;
        this.start = s;
        this.end = e;
    }

    show_task(){
        return `Ваша задача - ${this.name}\nОписание задачи: \n${this.desc}.\nНачало: ${this.start}, окончание: ${this.end}`
    }
}

class CurrentTask extends Task{
    constructor(n, d, s, e, p, f=false){
        super(n, d, s, e);
        this.percentage = p
        this.flag = f
    }
    show_currenttask(){
        let a = `Ваша задача - ${this.name}\nОписание задачи: \n${this.desc}.\nНачало: ${this.start}, окончание: ${this.end}\nПроцент выполнения: ${this.percentage}\n`
        if (this.flag){
            a += `Задача завершена`
        } else {
            a += `Задача в процессе`
        }
        return a
    }
}

let task = new CurrentTask('18 лет', '11 класс, выжить, жить и поступить в уник', '22 Apr 2024', '22 Apr 2025')
let currenttask1 = new CurrentTask('Лето', 'Отдыхать', '01 Jun 2024', '31 Aug 2025', '54%')
console.log(task.show_task());
console.log(currenttask1.show_currenttask());


class Rectangle{
    constructor(x1, y1, x2, y2){
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
    }

    rects_crossed(or){
        if ((or.x1 >= this.x1 && or.y1 >= this.y1) && (or.x1 <= this.x2 && or.y1 <= this.y2)){
            return true
        } else if ((this.x1 >= or.x1 && this.y1 >= or.y1) && (this.x1 <= or.x2 && this.y1 <= or.y2)){
            return true
        } else {
            return false
        }
    }

    rect_contains_dot(x, y){
        if((x >= this.x1 && y >= this.y1) && (x <= this.x2 && y <= this.y2)){
            return true
        } else {
            return false
        }
    }

    rect_move(flag, x, y=0){
        if (flag == 0){
            this.x1 += x
            this.x2 += x
        } else if (flag == 1){
            this.y1 += y
            this.y2 += y
        } else if (flag == 2){
            this.x1 += x
            this.x2 += x
            this.y1 += y
            this.y2 += y
        }
    }
    
    rect_resize(w, h=0){
        this.x2 = x1 + w
        this.y2 = y1 + h
    }
}

let rect1 = new Rectangle(50, 50, 100, 100)
let rect2 = new Rectangle(0, 0, 150, 150)
console.log(rect1.rects_crossed(rect2));
rect1.rect_move(1, 100, 100)
console.log(rect1.x1, rect1.y1, rect1.x2, rect1.y2);