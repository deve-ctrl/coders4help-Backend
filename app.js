// create server
const express = require('express');
const app = express();

// set a global variable named __projectdir to refer to the project directory
global.__projectdir = __dirname;
// import path
const path = require('path');
// set template engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
// set template(views) directory
app.set("views", "views");
// use static directory
app.use(express.static(path.join(__dirname, 'public')));
// for dotenv using  
require("dotenv").config({ path: ".env" });
// for getting data from forms
app.use(express.urlencoded({ extended: true }));

// TODO Code starts here



// routes
const openRoute = require('./routes/open');
app.use(openRoute);




// TODO Code ends here

// Page Not Found --> Immer ans Ende setzen
const controllerError = require('./controllers/error');
app.use(controllerError.get404);

// * from npm package dotenv  use environment variables in a .env file
app.listen(process.env.PORT, () => {
   console.log("Server läuft auf Port: " + process.env.PORT);
});