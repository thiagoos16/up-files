const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.post("/uploads", multer(multerConfig).single("file"), (req, res) => {
    console.log(req.file);
    res.json({ "ok":"ok" }) 
});

module.exports = routes;