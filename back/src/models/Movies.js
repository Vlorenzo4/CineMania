const mongoose = require("mongoose");

const movieObjConfig = {
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
    max: 2026,
    min: 1888,
  },
  director: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  rate: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  poster: {
    type: String,
    required: true,
  },
};

const movieSchema = new mongoose.Schema(movieObjConfig);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = {
  Movie,
};
