const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");
const bookRoutes = require("./routes/books");
const genreRoutes = require("./routes/genres");

// middleware
app.use(bodyParser.json());

app.use("/api/books", bookRoutes);
app.use("/api/genres", genreRoutes);

// routes
app.get("/", (req, res) => {
  res.send("Please use /api/books or /api/genres");
});

// connect to mongoose
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB CONNECTED");
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
