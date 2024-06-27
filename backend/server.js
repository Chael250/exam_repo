const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/taskRoute")

const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to mongoDB..."))
  .catch((err) => console.log(err));

app.use("/routes",routes);

app.listen(port, () => console.log(`Listening at ${port}...`));
