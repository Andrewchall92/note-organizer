const express = require('express');
const app = express();
const PORT = 3000;
const notes = require('./db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/notes', (req, res) => {
    console.log('here')
    res.sendFile(__dirname + '/public/notes.html');
});

app.get('/', (req, res) => {
    console.log('hi')
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) =>{
    req.body.id = uuidv4();
    notes.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes)) 
    res.json(notes)
});

app.listen(PORT, () => {
    console.log('hi');
});