const express = require('express')
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');

// create a user using post "/api/auth/createuser." Does not require auth
router.post("/createuser", [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password must me atleast 5 character').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req)
    // if there are errors, return bad request and the errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    // check whether the user with the email exists already
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        // create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        // .then(user => { res.json(user) }).catch(err => {
        //     console.error(err)
        //     res.status(500).json({ error: "" })
        // })
        res.json(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Error occured")
    }

})
module.exports = router