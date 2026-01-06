const { Router } = require("express");
const {
  getMoviesController,
  createMovieController,
} = require("../controllers/movies.controller");
const { validateMovieData } = require("../middleware");

const moviesRouter = Router();

moviesRouter.get("/", getMoviesController);
moviesRouter.post("/", validateMovieData, createMovieController);

module.exports = {
  moviesRouter,
};
