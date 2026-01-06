const axios = require("axios");

function createForm() {
  const form = document.getElementById("movieForm");

  if (!form) {
    module.exports = {};
    return;
  }

  form.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const selectedGenres = [
      ...document.querySelectorAll('input[type="checkbox"]:checked'),
    ].map((inputGenre) => inputGenre.value);

    const newMovieData = {
      title: document.getElementsByName("title")[0].value.trim(),
      genre: selectedGenres,
      director: document.getElementsByName("director")[0].value.trim(),
      rate: document.getElementsByName("rate")[0].value.trim(),
      year: Number(document.getElementsByName("year")[0].value.trim()),
      duration: document.getElementsByName("duration")[0].value.trim(),
      poster: document.getElementsByName("poster")[0].value.trim(),
    };

    const emptyFields = [];
    for (const key in newMovieData) {
      const value = newMovieData[key];
      if (typeof value === "string" && value.length === 0) {
        emptyFields.push(key);
      }
      if (Array.isArray(value) && value.length === 0) {
        emptyFields.push(key);
      }
      if (typeof value === "number" && isNaN(value)) {
        emptyFields.push(key);
      }
    }

    if (emptyFields.length > 0) {
      alert(`faltan campos obligatorios para enviar`);
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:3000/movies",
        newMovieData
      );

      alert(data.msg);
      form.reset();
    } catch (err) {
      if (err.response.data.error.includes("title_1 dup key")) {
        alert(
          "El titulo de la pelicula se encuentra duplicado, intente con una nueva."
        );
      }
    }
  });
}

module.exports = {
  createForm,
};
