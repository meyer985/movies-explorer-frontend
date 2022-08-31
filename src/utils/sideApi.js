function getMovies() {
  return fetch("https://api.nomoreparties.co/beatfilm-movies")
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .then((data) => data);
}

export default getMovies;
