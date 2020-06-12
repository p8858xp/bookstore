const express = require("express");
const router = express.Router();
const Genre = require("../models/Genre");

// get all genres
router.get("/", async (req, res) => {
  try {
    const genres = await Genre.find();
    res.json(genres);
  } catch (err) {
    res.json({ message: err });
  }
});

// get a specific genre
router.get("/:id", async (req, res) => {
  try {
    const genre = await Genre.findById({ _id: req.params.id });
    res.json(genre);
  } catch (err) {
    res.json({ message: err });
  }
});

// submit a new genre
router.post("/", async (req, res) => {
  const genre = new Genre({
    name: req.body.name,
  });
  try {
    const savedGenre = await genre.save();
    res.json(savedGenre);
  } catch (err) {
    res.json({ message: err });
  }
});

// update a genre
router.put("/:id", async (req, res) => {
  try {
    const genre = await Genre.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
    res.json(gnere);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete a genre
router.delete("/:id", async (req, res) => {
  try {
    const genre = await Genre.remove({ _id: req.params.id });
    res.json(genre);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
