const express = require('express');
const Router = express.Router();
const controller = require('../services/blogcontroller')


const BlogController = new controller();
class BlogPage {
    constructor(){
        Router.get('/', this.getAllBlogs)
        Router.get('/:id', this.getBlogPage)
    }

    async getAllBlogs(req, res){
        BlogController.allblogs(req, res)
    }

    async getBlogPage(req, res){
        BlogController.getblog(req, res)
    }
}

new BlogPage();

module.exports = Router;