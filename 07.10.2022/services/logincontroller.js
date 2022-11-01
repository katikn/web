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
        this.users.forEach(elem => {
            if (req.body.username == elem['name'] && req.body.password == elem['password']){
                res.send(`${req.body.username} - ${req.body.password}`)
            }
            else {
                res.send('Вы не авторизовались')
            }
        })
        
    }
}
module.exports = LoginController;