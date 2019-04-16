const express = require('express');
const cors = require('cors')();
const sequelize = require('./models').sequelize;


const app = express();
const PORT = 8335;

app.use(cors);
app.use(express.json());
sequelize.sync();

app.use(router);

// 404 
app.use((req, res, next) => {
    res.status = 404;
    next(Error('not found'));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development'? err: {};

    // render the error page
    res.status(err.status || 500);
    // res.render('error');
    res.json({ error: err.message || 'internal server error' });
});

console.log('[Imagine Paper] Server start...');
app.listen(PORT, () => {
    console.log('[Imagine Paper] Server listen... (' + PORT + ')');
});
