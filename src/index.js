const express = require('express')
const morgan = require("morgan");
const path = require("path");

const app = express()

app.use(express.json())
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use('/api', require('./routes/routes'))
app.use(express.static(path.join(__dirname, "public")));
app.listen(4000, ()=>{
    console.log("XD");
})