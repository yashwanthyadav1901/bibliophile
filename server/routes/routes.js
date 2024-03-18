const express = require("express");
const BookController = require("./../controllers/BookController");
const Book = require("../models/Bookmodels");

const Router = express.Router();

Router.route("/books")
  .get(BookController.getAllBooks)
  .post(BookController.createBook);

Router.route("/:id")
  .get(BookController.getBook)
  .patch(BookController.updateBook)
  .delete(BookController.deleteBook);

Router.route("*").all((req, res) => {
  res.status(404).json({
    status: "fail",
    message: `can't find ${req.originalUrl} on this server.`,
  });
});

module.exports = Router;
