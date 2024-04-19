const express = require("express");
const dbConnect = require("./Config/dbConnect");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv").config({ path: "./.env" })
const sentenceRouter = require('./Routes/sentenceRoute');
dbConnect();
app.use(cors())
app.use(express.json());
app.use('/api/sentence', sentenceRouter);
// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
