const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: 'https://starfish-app-s27ho.ondigitalocean.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Accept',
    'Origin',
    'User-Agent',
    'DNT',
    'Cache-Control',
    'Keep-Alive',
    'X-Requested-With',
    'If-Modified-Since',
    'X-CSRF-Token' // Adicione se estiver utilizando tokens CSRF
  ],
  credentials: true,
  optionsSuccessStatus: 204 // Algumas versões antigas de navegadores (IE11, alguns Smart TVs) confundem 204 com erro
};

app.use(cors(corsOptions));

mongoose.connect(
    "mongodb+srv://dopamina:Dopamina123@cluster0.2v3bl7g.mongodb.net/port"
  );
  app.use(cors({
    origin: '*'
}));


app.use(express.json());
app.use(routes);

app.listen(3333);
