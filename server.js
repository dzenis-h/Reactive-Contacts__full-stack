const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "build")));

// For any other route, serve the index.html file (ReactJS).
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Test the SERVER
app.get("/api", (req, res) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 5566;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
