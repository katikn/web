const express = require('express');
const Router = express.Router();
const controller = require('../services/usercontroller')


const UserController = new controller()
class UserPage{
    constructor(){
        Router.get('/', this.showUsers)
    }

    async showUsers(req, res){
        UserController.showusers(req, res)
    }
}

new UserPage();

module.exports = Router;