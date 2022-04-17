const router = require('express').Router();


const { notes } = require('../db/db.json');

// GET route to grab notes from the notes database
router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
});

router.post('/notes', (req, res) => {
    console.log(req.body);

    res.json(req.body);
})

module.exports = router