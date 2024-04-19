const Sentence = require('../Models/sentenceModel');
const createSentence = async (req, res) => {
    console.log(req.body);
    try {
        const newSentence = await Sentence.create(req.body);
        res.json(newSentence);
    } catch (err) {
        throw new Error(err);
    }
};
// const getSentence=async(req,res)=>{
//     try{
//         const getSentence=await Sentence.find();
//         res.json(getSentence)
//     }
//     catch(err){
//         throw new Error(err);
//     }
// }
const getSentence = async (req, res) => {
    try {
        let query = {};

        // Check if req.query contains a language parameter
        if (req.query && req.query.language) {
            // If language parameter is provided, filter by language
            query.language = req.query.language;
        }

        // Find sentences based on the query
        const sentences = await Sentence.find(query);

        // Send the filtered sentences as JSON response
        res.json(sentences);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


const updateStatus = async (req, res) => {
    const { id } = req.params;
    console.log(req.params)
    try {
        const currData = await Sentence.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(currData);
    } catch (err) {
        throw new Error(err);
    }
};
const updateWord = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedData = await Sentence.findByIdAndUpdate(
            id,
            { $push: { words: req.body.words } },
            { new: true }
        );
        res.json(updatedData);
    } catch (err) {
        throw new Error(err);
    }
};
const updateCorrection = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedData = await Sentence.findByIdAndUpdate(
            id,
            { $push: { correction: req.body.correction } },
            { new: true }
        );
        res.json(updatedData);
    } catch (err) {
        throw new Error(err);
    }
};


module.exports = { createSentence, getSentence, updateStatus ,updateWord,updateCorrection};
