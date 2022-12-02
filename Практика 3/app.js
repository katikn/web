const express = require('express');
const app = express();
const njk = require('nunjucks');
const mongoose = require('mongoose');
const sessions = require('express-session');
const cookieParser = require('cookie-parser') ;

const redisStore = require('connect-redis')(sessions)
const redis = require('redis')
const client = redis.createClient();

const bodyParser = require('body-parser');
const PORT = 3000;
const oneDay = 1000 * 60 * 60 * 18;
let session = {}

const NewAnecdote = require('./routes/newanecdote');
const LoginPage = require('./routes/loginpage');
const AdminPage = require('./routes/adminpage');
const Anecdotes = require('./models/anecdote');

njk.configure('templates', {
    autoescape: true,
    express: app
})

app.use(sessions({
    secret: 'l0lk3k4eb7r3k228336358germanlol',
    saveUninitialized: true,
    store: new redisStore({
        host: 'localhost',
        port: 6379,
        client: client,
        ttl: 260
    }),
    cookie: {
        maxAge: oneDay
    },
    resave: false
}));
app.use(cookieParser());

app.use((req, res, next) => {
    let unauth = ['/']
    console.log(req.url);
    if (!unauth.includes(req.url) && req.sessions.user){
        next()
    } else if (unauth.includes(req.url)) {
        next()
    } else {
        res.send('Вы не авторизованы')
    }
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/new', NewAnecdote);
app.use('/login', LoginPage);
app.use('/admin', AdminPage);
app.get('/', (req, res) => {
    Anecdotes.find({}, function (err, allAnecdotes) {
        if (err) {
            console.log(err);
            return res.sendStatus(400);
        }
        res.render('main.njk', {main: allAnecdotes});
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