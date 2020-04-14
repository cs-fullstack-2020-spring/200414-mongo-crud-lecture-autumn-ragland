// imported mongoose module
let mongoose = require('mongoose');
// created ref to mongoose Schema class
let Schema = mongoose.Schema;

// defined model
let EntrySchema = new Schema(
    {
        entryTitle : String,
        entryAuthor : String,
        entryReadTime : Number,
    }
);

// exported mongoose model
module.exports = mongoose.model('entry200414', EntrySchema);