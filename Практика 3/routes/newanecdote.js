const express = require('express')
const Router = express.Router()
const controller = require('../services/newcontroller')
const NewController = new controller()

class NewAnecdote {
    constructor(){
        Router.get('/', this.showpage)
    }

    async showpage(req, res){
        NewController.showpage(req, res)
    }
}

new NewAnecdote();

module.exports = Router;