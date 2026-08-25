const express = require('express')
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require("jsonwebtoken");
const fetchuser = require('../middleware/fetchUser');


//ROUTE 1: create a user using post "/api/auth/createuser." Does not require auth
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
        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt)
        // create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, process.env.JWT_SECRET)
        res.json({ authtoken })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

})

//ROUTE 2: Authienticate a user using post "/api/auth/login." no login required 
router.post("/login", [
    body('email', 'Enter a Valid email').isEmail(),
    body('password', 'Password cannot be black').exists()
], async (req, res) => {
    // If there are errors, return Bad request  and the erorrs 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // fetch user email or password
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials." })
        }
        // compare pawword
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ errors: "Please try to login with correct credientials" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, process.env.JWT_SECRET)
        res.json({ authtoken })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

})

// ROUTE 3: Get logged in User details usign POST '/api/auth/getuser'. Login Required
router.post("/getuser", [
    body('email', 'Enter a Valid email').isEmail(),
    body('password', 'Password cannot be black').exists()
], fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})
module.exports = router      