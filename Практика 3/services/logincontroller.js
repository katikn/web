const Admin = require('../models/admin')

class LoginController{
    constructor(){
        this.a = 'при'
    }

    async showpage(req, res, a){
        let b = false
        if (a != ''){
            b = true
        }
        console.log(a, b);
        console.log({flag: b});
        res.render('login.njk', {flag: b})
    }

    async logging(req, res){
        Admin.find({}, function(err, allUsers){
            if (err){
                console.log(err);
                return res.sendStatus(400)
            }
            allUsers.forEach((admin) =>{
                if (req.body.username == admin['name'] && req.body.password == admin['password']){
                    const sess = req.session;
                    console.log(sess);
                    res.redirect('/admin')
                } else {
                    res.redirect('/login')
                }
            })
        })
    }
}

module.exports = LoginController;