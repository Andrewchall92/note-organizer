const express = require('express');
const app = express();
const PORT = 3000;
const notes = require('./db/db.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/notes', (req, res) => {
    console.log('here')
    res.sendFile(__dirname + '/public/notes.html');
});

app.get('*', (req, res) => {
    console.log('hi')
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.listen(PORT, () => {
    console.log('hi');
});