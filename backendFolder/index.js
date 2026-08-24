const express = require("express");
const connectDB = require("./db");
const app = express();

app.use(express.json())
connectDB();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hello World")
})
app.use('/api/auth', require("./routes/auth"))
app.use('/api/notes', require("./routes/notes"))

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});