const mongoose = require('mongoose');
const aws = require('aws-sdk');

const S3 = new was.S3();

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
    url: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

PostSchema.pre('save', function() {
    if (!this.url) {
        this.url = `${process.env.APP_URL}/files/${this.key}`
    }
});

PostSchema.pre('remove', function() {
    if (process.env.STORAGE_TYPE === "s3") {
        return S3.deleteObject({
            Bucket: 'up-files-tos',
            Key: this.key
        }).promise();
    } else {
        
    }
});

module.exports = mongoose.model('Post', PostSchema);