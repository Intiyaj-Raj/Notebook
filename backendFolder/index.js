const express = require("express");
const connectDB = require("./db");

const app = express();

connectDB();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hello World")
})
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});