var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3')

async function get_data(query, data_query) {
    let db = new sqlite3.Database("./routes/users.db", (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("connect to db complete!");
        }
    });

    let sql_queries = {
        auth: `SELECT * FROM users WHERE email = ? AND password = ?`
    }
    let sql = sql_queries[query];

    let promise = new Promise((resolve, reject) => {
        db.all(sql, data_query, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows)
            }
        });
    })

    let data = await promise;
    db.close();
    return data;
}

/* GET login page. */
router.post('/', function (req, res, next) {
    get_data('auth', [req.body.email, req.body.pass]).then((data) => {
        console.log(data);
        req.session.userid = data[0]['id'];
        req.session.islogin = 1;
        // console.log('Auth', req.session);
        // console.log('----------------------------------------------');
        // console.log('----------------------------------------------');
        // console.log('----------------------------------------------');
        // console.log('----------------------------------------------');
    });
    res.redirect('/')
});

module.exports = router;
