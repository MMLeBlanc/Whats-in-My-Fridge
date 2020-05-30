// Include the dependencies
const express = require("express");
const mongoose = require("mongoose");

const items = require("./routes/api/items");

const app = express();

// Recognizes incoming request objects as JSON
// Middleware that used to be done by body-parser (not included)
app.use(express.json());

// Bring keys file in from Config Folder
const db = require("./config/keys").mongoURI;

// Connect to MongoDB via Mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/items", items);

// Create PORT variable
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));
