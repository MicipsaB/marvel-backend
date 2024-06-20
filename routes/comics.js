const express = require("express");
const axios = require("axios");

const router = express.Router();

const apiKey = process.env.API_KEY;

//Route to get all the comics
router.get("/comics", async (req, res) => {
  try {
    const title = req.query.title || "";
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;

    console.log(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${apiKey}&title=${title}&limit=${limit}&skip=${skip}`
    );

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${apiKey}&title=${title}&limit=${limit}&skip=${skip}`
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//Route to get one comic
router.get("/comic/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${req.params.id}?apiKey=${apiKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
