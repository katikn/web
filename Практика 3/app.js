const express = require('express');
const app = express();
const njk = require('nunjucks')
const mongoose = require('mongoose')

njk.configure('templates', {
    autoescape: true,
    express: app
})

const bodyParser = require('body-parser')
const PORT = 3000;

const NewAnecdote = require('./routes/newanecdote')
const LoginPage = require('./routes/loginpage')
const AdminPage = require('./routes/adminpage')
const Anecdotes = require('./models/anecdote')

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/new', NewAnecdote)
app.use('/login', LoginPage)
app.use('/admin', AdminPage)
app.get('/', (req, res) => {
    Anecdotes.find({}, function (err, allAnecdotes) {
        if (err) {
            console.log(err);
            return res.sendStatus(400)
        }
        res.render('main.njk', {main: allAnecdotes})
    })
    
})
mongoose.connect("mongodb://0.0.0.0:27017/practisedb", {useUnifiedTopology: true}, function(err) {
    if (!err){
        app.listen(PORT, (err) =>{
            if (err) { console.log(err); }
            else console.log(`Server is starting now (http://localhost:${PORT})`);
        })
    } else {
        console.log(err);
    }
})