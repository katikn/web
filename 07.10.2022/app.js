const express = require('express')
const njk = require('nunjucks')
const app = express()
const PORT = 3000;

const BlogPage = require('./routes/blogpage')
const Users = require('./routes/userpage')
const LoginUser = require('./routes/loginuser')

njk.configure('templates', {
    autoescape: true,
    express: app
})

app.use('/blog', BlogPage)
app.use('/users', Users)
app.use('/auth', LoginUser)
app.get('/', (req, res) => {
    res.send('Главная страница')
})


app.listen(PORT, (err) =>{
    if (err) { console.log(err); }
    else console.log(`Server is starting now (http://localhost:${PORT})`);
})

//npm run start - запустить сервер