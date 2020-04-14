let express = require('express');
let router = express.Router();
router.use(express.json())

// test route
router.get('/test', (req,res) => {
    res.send("Test working");
});

// get all  entries
router.get('/', (req,res) => {
    res.send("All Entries");
});

// get entry by title
router.get('/:entryTitle', (req,res) => {
    res.send("Entry By Title");
});

// create entry
router.post('/', (req,res) => {
    res.send("Create Entry");
});

// update entry
router.put('/:entryTitle', (req,res) => {
    res.send("Update Entry");
});

// delete entry
router.delete('/:entryTitle', (req,res) => {
    res.send("Delete Entry");
});

module.exports = router;