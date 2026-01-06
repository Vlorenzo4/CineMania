const { movieCards } = require("./movieCards.js");
const { failData } = require("./failData.js");
const axios = require("axios");
const { createForm } = require("./createMovieForm.js");

const moviesContainer = document.getElementById("movies-container");

const getData = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/movies");
    movieCards(data);
  } catch (error) {
    failData();
  }
};

if (moviesContainer) {
  getData();
}

createForm();
