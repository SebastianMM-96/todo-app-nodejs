const express = require('express');
const app = express();
app.set('view engine', 'ejs');
/**
 * Listen port
 */
app.listen(3000);

app.get('/', (req, res)=>{
    // res.send('<h1>Wellcome to the home page</h1>')
    // res.sendFile('./views/index.html', {root : __dirname});
    res.render('index');
});

app.get('/items', (req, res)=>{
    // res.send('<h1>Add items</h1>')
    // res.sendFile('./views/items.html', {root : __dirname});
    res.render('items');
});

app.use((req, res) => {
    // res.sendFile('./views/404.html', { root: __dirname })
    res.render('404');
});