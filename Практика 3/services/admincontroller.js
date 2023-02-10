const Anecdote = require('../models/anecdote')
class AdminController {
    constructor() {
        this.a = []
    }

    async showpage(req, res) {
        let b = []
        let promise = new Promise((resolve, reject) => {
            Anecdote.find({}, function (err, allAnecdotes) {
                if (err) {
                    console.log(err);
                    return res.sendStatus(400)
                }
                allAnecdotes.forEach((anec) => {
                    // console.log(anec);
                    // let b = {'title': anec['title'], 'description': anec['description'], 'showing': anec['showing']}
                    b.push(anec)
                })
                resolve(b)
            })
        })
        let result = await promise
        res.render('admin.njk', { main: result })
    }

    async updating(req, res) {
        let b = req.body.shows
        console.log(b);
        Anecdote.updateMany({ _id: b }, { showing: true }, function (err) {
            if (err) {
                return console.log(err);
            }
            res.redirect('/admin')
        })
    }

    async get_padawans(req, res){
        let a = ['Антон', 'Макс', 'Максим', 'Саша', 'Артём', 'Master']
        res.json({'test1': a})
    }
}

module.exports = AdminController;