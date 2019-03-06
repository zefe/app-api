const express = require('express');
const api = require('./api');
const app = express();

app.use(express.json())

app.all('/', (req, res) => {
    res.send('Hello word')
    res.end()
})

app.use('/api', api)

//usar MORGAN to logs

//server
const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
  });