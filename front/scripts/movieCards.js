const container = document.getElementById("movies-container");

const movieCards = (data) => {
  data.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
  <img src="${movie.poster}" alt="${movie.title}" />

  <h3>${movie.title}</h3>

  <div class="info-movies">
    <span>📅 ${movie.year}</span>
    <span>⏱️ ${movie.duration}</span>
  </div>

  <div class="genres">
    ${movie.genre.map((g) => `<span class="genre-tag">${g}</span>`).join("")}
  </div>

  <div class="bottom-info">
    <span class="director">Director: ${movie.director}</span>
    <span class="score">${movie.rate}</span>
  </div>
`;
    container.appendChild(card);
  });
};

module.exports = {
  movieCards,
};
