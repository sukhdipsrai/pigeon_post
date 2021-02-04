const express = require('express');
const router = express.Router();

const upload = require('../services/file-upload').upload;
const s3 = require('../services/file-upload').s3;

const singleUpload = upload.single('image');

router.post('/image-upload', function(req, res) {
    singleUpload(req, res, function(err){
        if(err){
            return res.status(422).json({errors: 'Please attach jpeg or png'})
        }
        var params = { Bucket: 'pigeon-task-package', Key: req.file.key };
        var promise = s3.getSignedUrlPromise('getObject', params)
        .then(function(url) {
            // console.log('The URL is', url);
            return res.json({
            'imageUrl': url
            })
        })
    });
});

module.exports = router;