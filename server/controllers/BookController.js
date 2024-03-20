const Book = require("./../models/Bookmodels");
const multer = require("multer");
const fs = require("fs");

const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

exports.uploadPhoto = upload.single("coverImage");

exports.getAllBooks = async (req, res, next) => {
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
    let status = 400;
    let message = err;
    let extraDetails = "fail";

    const error = {
      status,
      message,
      extraDetails,
    };

    next(error);
  }
};

exports.getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(201).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    let status = 404;
    let message = err;
    let extraDetails = "not found";

    const error = {
      status,
      message,
      extraDetails,
    };

    next(error);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const { title, author, rating, thoughts, favouriteQuotes } = req.body;
    const coverImage = req.file ? req.file.path : null;
    console.log(coverImage);
    console.log(req.file);
    const newBook = await Book.create({
      title,
      author,
      rating,
      thoughts,
      favouriteQuotes,
      coverImage: coverImage ? `/${coverImage}` : null,
    });
    res.status(201).json({
      status: "success",
      data: {
        tour: newBook,
      },
    });
  } catch (err) {
    let status = 400;
    let message = err;
    let extraDetails = "fail";

    const error = {
      status,
      message,
      extraDetails,
    };

    next(error);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        updatedBook,
      },
    });
  } catch (err) {
    let status = 400;
    let message = err;
    let extraDetails = "fail";

    const error = {
      status,
      message,
      extraDetails,
    };

    next(error);
  }
};

// exports.deleteBook = async (req, res, next) => {
//   try {
//     console.log(req.body);
//     await Book.findByIdAndDelete(req.params.id);

//     res.status(200).json({
//       status: "success",
//       data: null,
//     });
//   } catch (err) {
//     let status = 400;
//     let message = err;
//     let extraDetails = "fail";

//     const error = {
//       status,
//       message,
//       extraDetails,
//     };

//     next(error);
//   }
// };

exports.deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({
        status: "fail",
        message: "Book not found.",
      });
    }

    // Extract the filename or path of the associated image from the book document
    const imagePath = book.coverImage; // Assuming coverImage contains the path or filename of the image

    if (imagePath) {
      // If the image path exists, delete the image file
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Error deleting image file:", err);
          // Log the error, but continue with the deletion of the book document
        }
      });
    }

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    // Handle errors
    console.error("Error deleting book:", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
};
