const express = require('express');
const app = express();

const bodyParser = require('body-parser')

const NewAnecdote = require('./routes/newanecdote')
const LoginPage = require('./routes/loginpage')
const AdminPage = require('./routes/adminpage')

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/new', NewAnecdote)
app.use('/login', LoginPage)
app.use('/admin', AdminPage)
app.get('/', (req, res) => {
    res.send('Main page')
})

app.listen(3000, (err) => {
    if (err){
        console.log(err);
    } else {
        console.log('при');
    }
})