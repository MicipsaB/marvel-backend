const express = require("express");
const axios = require("axios");

const router = express.Router();

const apiKey = process.env.API_KEY;

//Route to get all the characters
router.get("/characters", async (req, res) => {
  try {
    const name = req.query.name || "";
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${apiKey}&name=${name}&limit=${limit}&skip=${skip}`
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//Route to get one character
router.get("/character/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.id}?apiKey=${apiKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
