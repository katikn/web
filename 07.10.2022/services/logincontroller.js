class LoginController{
    constructor(){
        this.users = [{
            name: 'Antony',
            password: 123
        },
        {
            name: 'Anthony',
            password: 456
        }]
    }

    async showpage(req, res){
        res.render('login.njk')
    }

    async postpage(req, res){
        
    }
}
module.exports = LoginController;