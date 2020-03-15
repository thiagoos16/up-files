const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan =  require("morgan");

const app = express();
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(morgan("dev"));
app.use(cors());

mongoose.connect(
    "mongodb://localhost:27017/nodeapi", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use('/api', require('./src/routes'));

app.listen(3001);