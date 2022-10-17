const express = require('express');
const Router = express.Router();
const controller = require('../services/logincontroller')

const LoginController = new controller();
class LoginPage{
    constructor(){
        Router.get('/login', this.loginpage)
        Router.post('/user', this.checkuser)
    }

    async loginpage(req, res){
        LoginController.showpage(req, res)
    }

    async checkuser(req, res){
        LoginController.postpage(req, res)
    }
}

new LoginPage();
module.exports = Router;