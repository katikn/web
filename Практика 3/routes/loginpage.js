const express = require('express')
const Router = express.Router()
const controller = require('../services/logincontroller')
const LoginController = new controller()

class LoginPage {
    constructor(){
        Router.get('/', this.showpage)
    }

    async showpage(req, res){
        LoginController.showpage(req, res)
    }
}

new LoginPage();

module.exports = Router;