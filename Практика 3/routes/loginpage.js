const express = require('express')
const Router = express.Router()
const controller = require('../services/logincontroller')
const LoginController = new controller()

class LoginPage {
    constructor(){
        Router.get('/', this.showpage)
        Router.post('/auth', this.logging)
        Router.get('/logout', this.logout)
    }

    async showpage(req, res){
        const sess = req.session;
        let a = sess.username;
        LoginController.showpage(req, res, a)
    }

    async logging(req, res){
        const sess = req.session;
        sess.username = req.body.username;
        LoginController.logging(req, res)
    }
    
    async logout(req, res){
        const sess = req.session;
        sess.username = ''
        res.redirect('/')
    }
}

new LoginPage();

module.exports = Router;