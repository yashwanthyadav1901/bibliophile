const express = require("express");
const BookController = require("./../controllers/BookController");
const createBookSchema = require("./../validators/createBookValidator");
const validate = require("./../middleware/validateMiddleware");

const Router = express.Router();

Router.route("/books")
  .get(BookController.getAllBooks)
  .post(
    validate(createBookSchema),
    BookController.uploadPhoto,
    BookController.createBook
  );

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
