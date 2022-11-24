const express = require('express')
const Router = express.Router()
const controller = require('../services/logincontroller')
const LoginController = new controller()

class LoginPage {
    constructor(){
        Router.get('/', this.showpage)
        Router.post('/auth', this.logging)
    }

    async showpage(req, res){
        LoginController.showpage(req, res)
    }

    async logging(req, res){
        LoginController.logging(req, res)
    }
}

new LoginPage();

module.exports = Router;