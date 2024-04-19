const mongoose = require('mongoose');
var sentenceSchema = new mongoose.Schema({
    Sentence: {
        type: String,
        required: true,
    },
    Translation: {
        type: String,
        required: true,
    },
    words: [{
        word: {
            type: Array,
            default: null
        }
    }],
    status: {
        type: String,
    },
    correction:[{
        correctSent: {
            type: String,
            default: null
        }
    }],
    language:{
        type:"String"
    }
}, {
    timestamps: true,
});
module.exports = mongoose.model('Sentence', sentenceSchema);
