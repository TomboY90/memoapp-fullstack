const express = require('express');
const logger = require("morgan");
const bodyParser = require('body-parser')

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const memoRouter = require("./routes/memo");

const app = express();

// cors -> 위치 중요함. 다른 use 전에 setting 되어야 함.
app.all('/*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "POST, GET, PATCH, OPTIONS, DELETE")
	next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());                            // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));    // to support URL-encoded bodies
app.set('port', process.env.PORT || 3001);

// routes
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/memo", memoRouter);

// server start
app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
})