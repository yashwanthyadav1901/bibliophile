const Book = require("./../models/Bookmodels");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

exports.getAllBooks = async (req, res) => {
  try {
    let { title, sort } = req.query;
    let queryObject = {};

    if (title) {
      queryObject.title = { $regex: title, $options: "i" };
    }
    let query = Book.find(queryObject);

    if (sort) {
      let sortFix = sort.replace(",", " ");
      query = query.sort(sort);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 5;

    let skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    const books = await query;
    res.status(201).json({
      status: "success",
      data: {
        books,
      },
      length: books.length,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(201).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: newBook,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        updatedBook,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: {
        err,
      },
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);

    res.status(201).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
