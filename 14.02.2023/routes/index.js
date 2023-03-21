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
    auth: `SELECT * FROM users WHERE id = ?`
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

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req.session);
  if (req.session.islogin != 1){
    res.render('index.html', { name: '' });
  } else {
    get_data('auth', [req.session.userid]).then((data) => {
      res.render('index.html', { name: data[0]['name'] });
    });
  }
  
});

module.exports = router;
