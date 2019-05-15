const httpError = require('http-errors');
const express = require('express');
const cors = require('cors')();
const sequelize = require('./models').sequelize;
const path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const Common = require('./common');

require('dotenv').config();

const app = express();
const env = process.env.NODE_ENV || 'development';
const PORT = ((env === 'production') ? process.env.PROD_NODE_PORT : process.env.DEV_NODE_PORT) || 8335;

const routes = require('./routes');

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
sequelize.sync();

app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    // case 1
    // res.status = 404;
    // next(Error('not found'));

    const err = new Error('Not Found API');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    // res.status(res.statusCode || 500);
    // res.render('error');
    res.json({ error: err.message || 'internal server error' });
});

console.log('[Imagine Paper] Server start...');
app.listen(PORT, () => {
    console.log('[Imagine Paper] Server listen... (' + PORT + ')');
});
