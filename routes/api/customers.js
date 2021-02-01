const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
const keys = require('../../config/keys');
const passport = require('passport');

//import customer model

router.get("/customer_test", (req, res)=>{
    res.json({ msg: "This is the customers route" })
}  )