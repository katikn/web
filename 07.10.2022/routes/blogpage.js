const express = require('express');
const Router = express.Router();

class BlogPage {
    constructor(){
        Router.get('/blog', this.getAllBlogs)
        Router.get('/blog/:id', this.getBlogPage)
    }

    async getAllBlogs(req, res){
        res.send('Все записи')
    }

    async getBlogPage(req, res){
        res.send('Запись ' + req.params['id'])
    }
}

new BlogPage();

module.exports = Router;