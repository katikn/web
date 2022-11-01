const express = require('express');
const Router = express.Router();
const controller = require('../services/blogcontroller')


const BlogController = new controller();
class BlogPage {
    constructor(){
        Router.get('/', this.getAllBlogs)
        Router.get('/users', this.getUsers)
        Router.get('/test', this.Test)
        Router.get('/user/:name', this.getPostsByName)
        Router.get('/deleteus', this.deleteTestUser)
        Router.get('/change', this.changeUser)
        Router.get('/:id', this.getBlogPage)
    }

    async getAllBlogs(req, res){
        BlogController.allblogs(req, res)
    }

    async getBlogPage(req, res){
        BlogController.getblog(req, res)
    }

    async getPostsByName(req, res){
        BlogController.getPostsByName(req, res)
    }

    async getUsers(req, res){
        BlogController.getUsers(req, res)
    }

    async Test(req, res){
        BlogController.addTestUser(req, res)
    }

    async changeUser(req, res){
        BlogController.changeTestUser(req, res)
    }

    async deleteTestUser(req, res){
        BlogController.deleteTestUser(req, res)
    }
}

new BlogPage();

module.exports = Router;