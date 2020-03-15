require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

app.use(cors());

mongoose.connect(
    process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

app.use('/api', require('./src/routes'));

app.listen(3001);