const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "a book must have a title"],
    unique: true,
    trim: true,
  },
  author: {
    type: String,
    required: [true, "a book must have a author"],
    default: "unknown",
  },
  rating: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  thoughts: {
    type: String,
    trim: true,
  },
  favouriteQuotes: {
    type: String,
    trim: true,
  },
  coverImage: {
    type: String,
  },
  images: [String],
});

const Book = mongoose.model("Book", bookSchema); //Starts with capital letter a naming convention to say we are dealing with model

module.exports = Book;
