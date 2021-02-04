const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

aws.config.update({
    secretAccessKey: 'PnvDaXF9r5G+UXPtSh5SFubmz8lPcxr69taxJHqC',
    accessKeyId: 'AKIAJF2E57G5Y7JZKIJA',
    region: 'us-east-2'
})


const s3 = new aws.S3()
const fileFilter = (req, file, cb) =>{
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else{
        cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
    }
}

const upload = multer({
    fileFilter,
    storage: multerS3({
        s3: s3,
        bucket: 'pigeon-user',
        // acl: 'public-read',
        // metadata: function (req, file, cb) {
        //     console.log(file)
        //     cb(null, { fieldName: 'userImage' });
        // },
        key: function (req, file, cb) {
            console.log(file)
            cb(null, Date.now().toString()+'.jpg')
        }
    })
})

module.exports = upload;