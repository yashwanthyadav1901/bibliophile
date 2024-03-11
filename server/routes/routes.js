const express = require("express");
const BookController = require("./../controllers/BookController");
const Book = require("../models/Bookmodels");

const Router = express.Router();

Router.route("/")
  .get(BookController.getAllBooks)
  .post(BookController.createBook);

Router.route("/:id").get(BookController.getBook);

module.exports = Router;
