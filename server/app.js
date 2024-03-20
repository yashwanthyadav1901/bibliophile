const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const ErrorMiddleware = require("./middleware/ErrorMiddleware");


dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(routes);


app.use("/assets", express.static("assets"));

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successful"));

app.use(ErrorMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
