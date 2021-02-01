const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
const keys = require('../../config/keys');
const passport = require('passport');

//import driver model

router.get("/test", (req, res)=>{
    return res.json({ msg: "This is the drivers route" })
}  )

module.exports = router;