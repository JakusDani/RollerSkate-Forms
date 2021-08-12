const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

/* use public folder to root */
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('page/index', { title: "Home"})
});



app.listen(port, () => console.log(`listening on port http://localhost:${port}`));