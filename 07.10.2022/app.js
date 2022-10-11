const express = require('express')
const app = express()
const PORT = 3000;

const BlogPage = require('./routes/blogpage')

app.get('/', (req, res) => {
    res.send('Главная страница')
})
app.get('/blog', BlogPage)
app.get('/blog/:id', BlogPage)

app.listen(PORT, (err) =>{
    if (err) { console.log(err); }
    else console.log(`Server is starting now (http://localhost:${PORT})`);
})

//npm run start - запустить сервер