// const express = require('express');
// const sessions = require('express-session');
// const app = express();
// const redisStore = require('connect-redis')(sessions)
// const redis = require('redis')
// const client = redis.createClient({
//     legacyMode: true
// });

// const oneDay = 1000 * 60 * 60 * 18;
// let session = {}
// app.use(sessions({
//     secret: 'l0lk3k4eb7r3k228336358germanlol',
//     saveUninitialized: true,
//     store: new redisStore({
//         host: '127.0.0.1',
//         port: 6379,
//         client: client,
//         ttl: 260
//     }),
//     cookie: {
//         maxAge: oneDay
//     },
//     resave: false
// }));


// module.exports = isAuth;