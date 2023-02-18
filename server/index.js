const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Mate!')
})

app.listen(7000, (req, res) => {
    console.log('listening on 7000')
})