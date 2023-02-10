const Anecdote = require('../models/anecdote')
class NewController{
    constructor(){
        this.a = 'при'
    }

    async showpage(req, res){
        res.render('new.njk')
    }

    async createAnecdote(req, res){
        console.log(req.body.sortselection);
        const anecdote = new Anecdote({title: req.body.title, description: req.body.desc, category: req.body.sortselection, showing: false})
        anecdote.save(function(err){
            if (err){
                return console.log(err);
            }
            res.redirect('/')
        })
    }
}

module.exports = NewController;