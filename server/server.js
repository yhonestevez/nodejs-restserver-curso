const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.get('/usuario', function(req, res) {
    res.json('Hello World')
})

app.listen(3000, () => {
    console.log('Escuchando puerto 3000');
});