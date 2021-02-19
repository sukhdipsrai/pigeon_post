const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const skey = require("../config/keys");
aws.config.update({
  secretAccessKey: skey.secretAccessKey,
  accessKeyId: skey.accessKeyId,
  region: "us-east-2",
});

const s3 = new aws.S3();
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid Mime Type, only JPEG and PNG"), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    s3: s3,
    bucket: "pigeon-task-package",
    // acl: 'public-read',
    // metadata: function (req, file, cb) {
    //     console.log(file)
    //     cb(null, { fieldName: 'userImage' });
    // },
    key: function (req, file, cb) {
      // console.log(file)
      cb(null, Date.now().toString() + ".jpg");
    },
  }),
});

module.exports = { upload, s3 };
