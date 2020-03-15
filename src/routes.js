const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/Post');

routes.post("/uploads", multer(multerConfig).single("file"), async(req, res) => {
    const { originalname: name, size, key, location: url = '' } = req.file;

    const post = await Post.create({
        // name: req.file.originalname,
        // size: req.file.size,
        // key: req.file.filename,
        name,
        size,
        key,
        url
    });
   
    return res.json(post)
});

module.exports = routes;