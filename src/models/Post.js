const mongoose = require('mongoose');

const PostSchema =  new mongoose.Schema({
    name: String, // assim tbm está certo, pois os campos não dependeram do usuário
    size: {
        type: Number,
        required: true,
    },
    key: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Post', PostSchema);