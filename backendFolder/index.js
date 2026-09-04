require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://inotebook-by-intiyaj.vercel.app"
        ],
        credentials: true
    })
);

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});