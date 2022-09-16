function Character(_name, _level, _img = "images/standart.png") {
    this.name = _name;
    this.level = _level;
    this.img = _img
    this.card = {
        get colorName() {
            return this._colorName;
        },
        set colorName(val) {
            this._colorName = val;
        },
        get colorLvl() {
            return this._colorLvl;
        },
        set colorLvl(val) {
            this._colorLvl = val;
        },
        get headerImage() {
            return this._headerImage;
        },
        set headerImage(val) {
            this._headerImage = val;
        }
    }
    this.changeName = function (newName) {
        console.log(newName);
        if (newName.length != 0) {
            this.name = newName;
        }
    }
    this.changeLvl = function (newLvl) {
        if (newLvl.length != 0) {
            this.level = newLvl;
        }
    }
    this.changeImg = function (newImg) {
        if (newImg.length != 0) {
            this.img = newImg;
        }
    }
    this.changeNameColor = function (newColorName) {
        if (newColorName.length != 0){
            Object.assign(this.card, {_colorName: newColorName})
        }
    }
    this.changeLvlColor = function (newColorLvl) {
        if (newColorLvl.length != 0){
            Object.assign(this.card, {_colorLvl: newColorLvl})
        }
    }
    this.changeImageColor = function (newHeaderImg) {
        if (newHeaderImg.length != 0){
            Object.assign(this.card, {_headerImage: newHeaderImg})
        }
    }
    
    this.showonpage = function (ctx) {
        if (this.card._headerImage){
            ctx.fillStyle = this.card._headerImage;
        } else {
            ctx.fillStyle = "white";
        }
        ctx.fillRect(100, 100, 300, 300);
        ctx.rect(100, 100, 300, 300);
        ctx.fillStyle = "white";
        ctx.fillRect(170, 130, 160, 170);
        var pic = new Image();
        pic.onload = function () {
            ctx.drawImage(pic, 175, 130, 150, 170);
        };
        pic.src = this.img;
        ctx.rect(100, 400, 300, 100);
        ctx.stroke();
        ctx.font = '30px Arial';
        if (this.card._colorName){
            ctx.fillStyle = this.card._colorName;
        } else {
            ctx.fillStyle = "black";
        }
        ctx.fillText(this.name, 130, 460);
        ctx.stroke();
        ctx.rect(100, 500, 300, 100);
        ctx.stroke();
        if (this.card._colorLvl){
            ctx.fillStyle = this.card._colorLvl;
        } else {
            ctx.fillStyle = "black";
        }
        ctx.fillText(this.level + " lvl", 130, 560);
        ctx.stroke();
    }
}



export { Character }; 