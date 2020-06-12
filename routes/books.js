const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});

// get a specific book
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById({ _id: req.params.id });
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
});

// submit a new book
router.post("/", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    genre: req.body.genre,
    author: req.body.author,
  });
  try {
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

// update a book
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete a book
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.remove({ _id: req.params.id });
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
