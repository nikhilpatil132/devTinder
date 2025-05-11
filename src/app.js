
const express = require('express');
const app = express();
// app.use('/', (req, res) => {
//     res.end('hello hello');
// })
app.get('/user', (req, res) => {
    res.send({firstname:'nikhil',lastname:'patil'});
});
// app.use('/', (req, res) => {
//     res.end('hello hello');
// })
app.post('/user', (req, res) => {
    res.send('data successfully saved to DB');
});
app.patch('/user', (req, res) => {
    res.send('successfully updated');
});
app.listen(7777, () => {
    console.log('server is listening the incoming requests from the port 7777');
});

