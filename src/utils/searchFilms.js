import config from "./constants";

export function textSearch(data, key) {
  return data.filter((film) => {
    // const string =
    //   `${film.nameRU}${film.nameEN}${film.director}${film.country}${film.year}${film.description}`.toLowerCase();
    const string = `${film.nameRU}${film.nameEN}`.toLowerCase();
    return string.includes(key.toLowerCase());
  });
}

export function timeSearch(data, key) {
  return data.filter((film) => film.duration < config.SHORT_FILM);
}
