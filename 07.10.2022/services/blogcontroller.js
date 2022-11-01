const { default: mongoose } = require('mongoose');
const User = require('../models/user')

class BlogController{
    constructor() {
        this.blogs = [{
            title: "1 blog",
            text: "oh my god it's my first blog",
            date: "11.10.2022",
            name: "ktiknn"
        },
        {
            title: "minecraft",
            text: "minecraft 1.30 version",
            date: "01.01.2077",
            name: "minecrafter"
        },
        {
            title: "xz kaif",
            text: "xz kaif text!!!!!!!!!",
            date: "29.02.2016",
            name: "kaifer"
        },
        {
            title: "2 blog",
            text: "oh my god it's my second blog",
            date: "18.10.2022",
            name: "ktiknn"
        }
    ]
    }
    async allblogs(req, res){
        let a = {main: this.blogs}
        console.log(a['main']);
        res.render('index.njk', {main: this.blogs})
    }

    async getPostsByName(req, res){
        let a = []
        this.blogs.forEach(elem => {
            if (elem['name'] == req.params['name']){
                a.push(elem)
            }
        })
        res.render('index.njk', {main: a})
    }

    async getblog(req, res){
        res.render('blogs.njk', this.blogs[req.params['id'] - 1])
    }

    async getUsers(req, res){
        User.find({}, function(err, allUsers){
            if (err){
                console.log(err);
                return res.sendStatus(400)
            }
            res.send(allUsers)
        })
    }

    async addTestUser(req, res){
        const user = new User({name: "Vasya", age: 17})
        user.save(function(err){
            if (err){
                return console.log(err);
            }
            res.send('Test user was added')
        })
    }

    async changeTestUser(req, res){
        User.updateOne({name: 'Vasya'}, {age: '19'}, function(err){
            if (err){
                return console.log(err);
            }
            res.send('Test user was updated')
        })
    }

    async deleteTestUser(req, res){
        mongoose.deleteModel('User', function(err){
            if (err){
                return console.log(err);
            }
            res.send('User model was deleted')
        });

    }

}

module.exports = BlogController;