// import express
let express = require('express');
// create router
let router = express.Router();
// json middleware
router.use(express.json());
// import mongoose model
let EntryCollection = require('../models/EntrySchema');

// test route
router.get('/test', (req,res) => {
    res.send("Test working");
});

// get all  entries
router.get('/', (req,res) => {
    // res.send("Get all method worked");
    // mongoose find method to find any entry that matches the search criteria
    // param 1 = filter on (no filter to find all entries)
    // param 2 = callback function to send errors OR results using ternary
    EntryCollection.find({}, (errors, results) => {
        errors ? res.send(errors) : res.send(results)
    });
});

// get entry by title
router.get('/:entryTitle', (req,res) => {
    // res.send("Get by title method worked");
    // mongoose findOne method to find first entry that matches the search criteria
    // param 1 = filter {property to filter on : property value to match}
    // param 2 = callback function to send errors OR results using ternary
    EntryCollection.findOne({entryTitle : req.params.entryTitle}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    });
});

// create entry
router.post('/', (req,res) => {
    // res.send("Post method worked");
    // mongoose create method to create a new document in your collection
    // param 1 = document
    // param 2 = callback function to send errors OR results using ternary
    EntryCollection.create(req.body, (errors,results) => {
        errors ? res.send(errors) : res.send(results);
    });
});

// update entry
router.put('/:entryTitle', (req,res) => {
    // res.send("Put method worked");
    // mongoose findOneAndUpdate method to find the first entry that matches the search criteria and update it
    // param 1 = filter on (no filter to find all entries)
    // param 2 = filter {property to filter on : property value to match}
    // param 3 = document
    EntryCollection.findOneAndUpdate({entryTitle : req.params.entryTitle}, req.body, (errors,results) => {
        errors ? res.send(errors) : res.send(results);
    });
});

// delete entry
router.delete('/:entryTitle', (req,res) => {
    // res.send("Delete method worked");
    // mongoose findOneAndDelete method to find first entry that matches the search criteria and delete it
    // param 1 = filter {property to filter on : property value to match}
    // param 2 = callback function to send errors OR message using ternary
    EntryCollection.findOneAndDelete({entryTitle : req.params.entryTitle}, (errors, results) => errors ? res.send(errors) : res.send(`${req.params.entryTitle} was deleted`));
});

// export router
module.exports = router;