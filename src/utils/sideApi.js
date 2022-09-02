import config from "./constants";
function getMovies() {
  return fetch(config.SIDE_API_URL)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .then((data) => data);
}

export default getMovies;
