const express = require('express')
const fetchuser = require('../middleware/fetchUser')
const router = express.Router()
const Notes = require("../models/Notes")
const { body, validationResult } = require('express-validator');


// Route 1: Get all the notes GET "/api/notes/fetchallnotes" Login Required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

})
// Route 2: Add a new notes using POST "/api/notes/addnote" . Login Required 
router.post("/addnote", fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({ min: 5 }),

], async (req, res) => {

    try {
        const { title, description, tag, } = req.body
        const errors = validationResult(req)
        // if there are errors, return bad request and the errors
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// Route 3: Update an exisiting note : PUT '/api/notes/updatenote. Login Required 

router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {

        // create a newNote object 
        const newNote = {}
        if (title) { newNote.title = title };
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        // Find the note to be updated and update it
        let note = await Notes.findById(req.params.id)
        if (!note) {
            return res.status(404).send("Not Found")
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

})
// Route 4: Delete an exisiting note : 
// DELETE '/api/notes/delete. Login Required 
router.delete('/deletenote/:id', fetchuser, async (req, res) => {


    try {
        // find the note to be delete and delete it
        let note = await Notes.findById(req.params.id)
        if (!note) {
            return res.status(404).send("Not Found")
        }

        // Allow deletion only if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted" })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

})

module.exports = router