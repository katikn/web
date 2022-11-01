const express = require('express')
const Router = express.Router()
const controller = require('../services/admincontroller')
const AdminController = new controller()

class AdminPage {
    constructor(){
        Router.get('/', this.showpage)
    }

    async showpage(req, res){
        AdminController.showpage(req, res)
    }
}

new AdminPage();

module.exports = Router;