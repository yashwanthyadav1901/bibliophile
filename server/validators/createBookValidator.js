const { z } = require("zod");

//creating an object schema

const createBookSchema = z.object({
  title: z
    .string({ required_error: "title is required" })
    .trim()
    .max(255, "name must not be more than 255 characters"),

  author: z
    .string({
      required_error: "author name is required",
    })
    .trim()
    .max(255, "author name must not exceed 255 characters"),
});

module.exports = createBookSchema;
