let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EntrySchema = new Schema(
    {
        entryTitle : String,
        entryAuthor : String,
        entryReadTime : Number,
    }
);

module.exports = mongoose.model('entry200414Test', EntrySchema);