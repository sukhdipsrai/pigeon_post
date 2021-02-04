const express = require('express');
const router = express.Router();

const upload = require('../services/file-upload')

const singleUpload = upload.single('image');

router.post('/image-upload', function(req, res) {
    debugger
    singleUpload(req, res, function(err){
    debugger
        return res.json({'imageUrl': req.file.location})
    });
});

module.exports = router;