const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT|| 5000;
const router = require('./src/routes/index');
const { validationResult } = require("express-validator");

app.use(validationResult);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/', router);
app.engine('hbs', exphbs.engine({extname:".hbs"}));
app.set('view engine', 'hbs');


app.listen(port, ()=>{
    console.log(`The server is listening on port ${port}`)
})
