var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app/routes/indexRoute');
var reportRouter = require('./app/routes/reportRoute');
var chartRouter = require('./app/routes/chartRoute');
var flowRouter = require('./app/routes/flowRoute');
var taskRouter = require('./app/routes/taskRoute');
var helpRouter = require('./app/routes/helpRoute');
var categoryRouter = require('./app/routes/categoryRoute');
var insertExpenseRouter = require('./app/routes/insertExpenseRoute');
var insertRevenueRouter = require('./app/routes/insertRevenueRoute');
var expenseRouter = require('./app/routes/expenseRoute');
var revenueRouter = require('./app/routes/revenueRoute');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './app/public')));
app.use(express.static(path.join(__dirname, './app/views')));

app.use('/', indexRouter);
app.use('/report', reportRouter);
app.use('/chart', chartRouter);
app.use('/flow', flowRouter);
app.use('/task', taskRouter);
app.use('/help', helpRouter);
app.use('/category', categoryRouter);
app.use('/insertExpense', insertExpenseRouter);
app.use('/insertRevenue', insertRevenueRouter);
app.use('/expense', expenseRouter);
app.use('/revenue', revenueRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
