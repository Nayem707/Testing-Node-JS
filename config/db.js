const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;

mongoose.set("strictQuery", false);

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
