const Admin = require('../models/admin')

class LoginController{
    constructor(){
        this.a = 'при'
    }

    async showpage(req, res){
        res.render('login.njk')
    }

    async logging(req, res){
        Admin.find({}, function(err, allUsers){
            if (err){
                console.log(err);
                return res.sendStatus(400)
            }
            allUsers.forEach((admin) =>{
                if (req.body.username == admin['name'] && req.body.password == admin['password']){
                    res.redirect('/admin')
                } else {
                    res.redirect('/login')
                }
            })
        })
    }
}

module.exports = LoginController;