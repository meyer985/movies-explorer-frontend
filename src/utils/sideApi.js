function getMovies() {
  return fetch("https://api.nomoreparties.co/beatfilm-movies")
    .then((res) => res.json())
    .then((data) => data);
}

export default getMovies;
