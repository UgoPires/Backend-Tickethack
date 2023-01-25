require("./models/connection");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

//var indexRouter = require("./routes/index");
var tripsRouter = require("./routes/trips");
var bookingsRouter = require("./routes/bookings");

const { application } = require("express");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//app.use("/", indexRouter);
app.use("/trips", tripsRouter);
app.use("/bookings", bookingsRouter);

module.exports = app;
