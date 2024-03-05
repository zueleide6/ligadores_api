const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require("cors");

app.use(cors());

mongoose.connect(
    "mongodb+srv://dopamina:Dopamina123@cluster0.2v3bl7g.mongodb.net/"
  );
  app.use(cors({
    origin: '*'
}));

app.use(fileUpload());

app.use(express.json());
app.use(routes);

app.listen(3333);