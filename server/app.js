const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const dressRouter = require("./routes/dressRouter");
const favRouter = require("./routes/favRouter");
const { URL, PORT } = require("./config/config");

const app = express();

app.use(cors());
app.use("/api/dresses", dressRouter);
app.use("/api/favs", favRouter);

const main = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT} port`);
    });
  } catch (err) {
    return console.log(err);
  }
};

main();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});
