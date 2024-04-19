const express = require("express");
const router = express.Router();
const { createSentence, getSentence, updateSentence, updateWord, updateStatus, updateCorrection } = require("../Controller/sentenceCtrl");
router.post('/', createSentence);
router.get('/', getSentence);
router.put('/status/:id', updateStatus);
router.put('/word/:id', updateWord);
router.put('/correction/:id', updateCorrection);

module.exports = router;
