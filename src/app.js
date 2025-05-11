
const express = require('express');
const app = express();
app.use('/nikhil',(req, res) => {
    res.end('hello namste dev!');
})
app.use('/test', (req, res) => {
    res.end('wat');
})
app.listen(7777, () => {
    console.log('server is listening the incoming requests from the port 7777');
})

