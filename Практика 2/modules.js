
function Card(title, desc) {
    this.obj = {
        title: title,
        desc: desc,
        completed: false
    };
    this.create = function () {
        return $("<div class='col s3 dragg cards'>").append($("<h4>").text(this.obj.title)).append($("<p>").text(this.obj.desc)).append($("<button class='del'>").text("X")).append($("<button class='check'>").text("+"))
    }
    this.update = function (newTitle, newDescription) {
        this.obj.title = newTitle;
        this.obj.desc = newDescription;
        return this.create
    }
}

function TaskCards() {
    this.allcards = []
    this.completed = []
    this.appnd = function(card) {
        this.allcards.push(card)
    }
    this.tickCompleted = function(card) {
        if (card.obj.completed) {
            let a = this.allcards.indexOf(card)
            this.completed.push(card)
        }
    }
}

// export { hello, test1 }
export { Card, TaskCards };