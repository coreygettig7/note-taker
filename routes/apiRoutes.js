const router = require('express').Router();
const fs = require('fs');

// const notes = require('../db/db.json');

// GET route to grab notes from the notes database
router.get('/notes', (req, res) => {
    let notes = fs.readFileSync('./db/db.json', 'utf8');

    res.json(JSON.parse(notes));
});

router.post('/notes', (req, res) => {
    let notes = fs.readFileSync('./db/db.json', 'utf8');

    const note = {
        ...req.body,
        id: notes.length.toString()
    };

    const parsedNotes = JSON.parse(notes);

    parsedNotes.push(note);

    fs.writeFile('./db/db.json', JSON.stringify(parsedNotes, null, 2),
        (err, text) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("You added a note!");
        });

    res.json(note);
});

module.exports = router;