const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(express.static('target/'));
app.use(helmet());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(3001, () => {
    console.log("Server start on port 3001");
});