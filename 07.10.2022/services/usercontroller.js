class UserController{
    constructor(){
        this.users = ['Antony', 'Anthony', 'Anton', 'Ant', 'Tna']
    }

    async showusers(req, res){
        res.render('users.njk', {main: this.users})
    }
}

module.exports = UserController;