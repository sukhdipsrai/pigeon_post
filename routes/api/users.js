const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
//import user model

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email,
        phone: req.user.phone,
        // imageUrl: req.user.imageUrl
    });
})

router.post("/register", (req, res) => {
    // debugger
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            errors.email = "Email has already taken";
            return res.status(400).json(errors);
        } else {
            // debugger
            const newUser = new User({
                // id: req.user.id,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                usertype: req.body.usertype,
                // imageUrl: req.body.imageUrl
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = { 
                                id: user.id,
                                email: user.email, 
                                firstname: user.firstname,
                                lastname: user.lastname,
                                phone: user.phone,
                                usertype: user.usertype,
                                // imageUrl: user.imageUrl
                            };

                            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            });
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            errors.handle = "User does not exist";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: user.id,
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    phone: user.phone,
                    usertype: user.usertype,
                    // imageUrl: user.imageUrl
                };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err =>
            res.status(404).json({ notaskfound: 'No task found with that ID' })
        );
});

module.exports = router;