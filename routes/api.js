let express = require('express');
let router = express.Router();
router.use(express.json())

let EntryCollection = require('../models/EntrySchema')

// test route
// router.get('/test', (req,res) => {
//     res.send("Test working");
// });

// get all  entries
router.get('/', (req,res) => {
    // res.send("All Entries");
    EntryCollection.find(
        {}, (error, result) => {
            error ? res.send(error) : res.send(result)
        }
    );
});

// get entry by title
router.get('/:entryTitle', (req,res) => {
    // res.send("Entry By Title");
    EntryCollection.findOne(
        {entryTitle : req.params.entryTitle}, (error, result) => {
            error ? res.send(error) : res.send(result)
        }
    );
});

// create entry
router.post('/', (req,res) => {
    // res.send("Create Entry");
    EntryCollection.create(req.body);
    res.send(req.body);
});

// update entry
router.put('/:entryTitle', (req,res) => {
    // res.send("Update Entry");
    EntryCollection.findOneAndUpdate({entryTitle : req.params.entryTitle}, req.body, (error, result) => {
        error ? res.send(error) : res.send(`${req.params.entryTitle} Updated`);
    })
});

// delete entry
router.delete('/:entryTitle', (req,res) => {
    // res.send("Delete Entry");
    EntryCollection.findOneAndDelete({entryTitle : req.params.entryTitle}, req.body, (error, result) => {
        error ? res.send(error) : res.send(`${req.params.entryTitle} Deleted`);
    });
});

module.exports = router;