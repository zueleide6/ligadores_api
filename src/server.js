const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: 'https://starfish-app-s27ho.ondigitalocean.app', // ou '*' para permitir todos os domínios
  allowedHeaders: ['Content-Type', 'Authorization'] // Adicione aqui todos os cabeçalhos que suas requisições utilizam
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
