const express = require("express");
const db = require("../models");
const router = express.Router();

router.use(express.json(), express.urlencoded({ extended: true }));

router.get("/books", (req, res) => {
  db.Book.find()
    .then((books) => res.json(books))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.post("/books", (req, res) => {
  const newBookData = req.body;

  db.Book.create(newBookData)
    .then((book) => res.json(book))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.delete("/books/:id", (req, res) => {
  db.Book.deleteOne({ _id: req.params.id })
    .then(() => res.end())
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
