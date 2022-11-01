const express = require('express')
const njk = require('nunjucks')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = 3000;

const BlogPage = require('./routes/blogpage')
const Users = require('./routes/userpage')
const LoginUser = require('./routes/loginuser')

njk.configure('templates', {
    autoescape: true,
    express: app
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/blog', BlogPage)
app.use('/users', Users)
app.use('/auth', LoginUser)
app.get('/', (req, res) => {
    res.send('Главная страница')
})

mongoose.connect("mongodb://localhost:27017/userdb", {useUnifiedTopology: true}, function(err) {
    if (!err){
        app.listen(PORT, (err) =>{
            if (err) { console.log(err); }
            else console.log(`Server is starting now (http://localhost:${PORT})`);
        })
    } else {
        console.log(err);
    }
})


//npm run start - запустить сервер