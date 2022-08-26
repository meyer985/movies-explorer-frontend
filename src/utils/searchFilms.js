export function textSearch(data, key) {
  return data.filter((film) => {
    const string =
      `${film.nameRU}${film.nameEN}${film.director}${film.country}${film.year}${film.description}`.toLowerCase();
    return string.includes(key.toLowerCase());
  });
}

export function timeSearch(data, key) {
  return data.filter((film) => film.duration < 41);
}
