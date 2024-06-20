require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

//Import des routes
const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");

//Utilisation des routes
app.use(charactersRoutes);
app.use(comicsRoutes);

app.all("*", (req, res) => {
  res.status(404).json("Page not found");
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
