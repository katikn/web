const express = require('express')
const Router = express.Router()
const controller = require('../services/admincontroller')
const AdminController = new controller()

class AdminPage {
    constructor(){
        Router.get('/', this.showpage)
        Router.post('/update', this.updating)
        Router.get('/get_padawans', this.get_padawans)
    }

    async showpage(req, res){
        AdminController.showpage(req, res)
    }

    async updating(req, res){
        AdminController.updating(req, res)
    }

    async get_padawans(req, res){
        AdminController.get_padawans(req, res)
    }
}

new AdminPage();

module.exports = Router;