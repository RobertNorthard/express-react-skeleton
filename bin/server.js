const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(express.static('target/'));
app.use(helmet());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});