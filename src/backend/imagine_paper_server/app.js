const httpError = require('http-errors');
const express = require('express');
const cors = require('cors')();
const sequelize = require('./models').sequelize;
const path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');


const app = express();
const PORT = 8335;

const routes = require('./routes');

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
sequelize.sync();

app.use(routes);

app.use('/apitest', express.static(path.join(__dirname, './node_modules/swagger-ui/dist')));

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

app.on('error', onError);
app.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    let bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  /**
   * Event listener for HTTP server "listening" event.
   */
  function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }
