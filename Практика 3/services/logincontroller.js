class LoginController{
    constructor(){
        this.a = 'при'
    }

    async showpage(req, res){
        res.send('Войдите в админский аккаунт!')
    }
}

module.exports = LoginController;