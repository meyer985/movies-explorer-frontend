function getMovies() {
  return fetch("https://api.nomoreparties.co/beatfilm-movies");
}

export default getMovies;
