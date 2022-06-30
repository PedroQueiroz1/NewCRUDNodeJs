const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT|| 5000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.engine('hbs', exphbs.engine({extname:".hbs"}));
app.set('view engine', 'hbs');

app.get('/', (req,res)=>{
    res.render('home.hbs');
})

app.listen(port, ()=>{
    console.log(`The server is listening on port ${port}`)
})
