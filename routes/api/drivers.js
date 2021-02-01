const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
const keys = require('../../config/keys');
const passport = require('passport');

//import driver model

router.get("/driver_test", (req, res)=>{
    res.json({ msg: "This is the drivers route" })
}  )