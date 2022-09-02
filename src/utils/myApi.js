import config from "./constants";

class MyApi {
  constructor(props) {
    const { BASE_URL, headers } = props;
    this.BASE_URL = BASE_URL;
    this.headers = headers;
  }

  addUser(data) {
    return fetch(`${this.BASE_URL}/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    }).then((res) =>
      res.ok
        ? res.json()
        : res.text().then((text) => {
            throw new Error(text);
          })
    );
  }

  login(data) {
    return fetch(`${this.BASE_URL}/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    }).then((res) =>
      res.ok
        ? res.json()
        : res.text().then((text) => {
            throw new Error(text);
          })
    );
  }

  auth() {
    const jwt = this._getJWT();

    return fetch(`${this.BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    }).then((res) =>
      res.ok
        ? res.json()
        : res.text().then((text) => {
            throw new Error(text);
          })
    );
  }

  updateUser(data) {
    return fetch(`${this.BASE_URL}/users/me`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${this._getJWT()}`,
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.ok
        ? res.json()
        : res.text().then((text) => {
            throw new Error(text);
          })
    );
  }

  getSavedMovies() {
    return fetch(`${this.BASE_URL}/movies`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${this._getJWT()}`,
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(res)));
  }

  postMovie(data) {
    return fetch(`${this.BASE_URL}/movies`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${this._getJWT()}`,
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then((res) =>
      res.ok
        ? res.json()
        : res.text().then((text) => {
            throw new Error(text);
          })
    );
  }

  deleteMovie(data) {
    return fetch(`${this.BASE_URL}/movies/${data}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${this._getJWT()}`,
      },
    }).then((res) =>
      res.ok
        ? res.json()
        : res.text().then((text) => {
            throw new Error(text);
          })
    );
  }

  _getJWT() {
    const jwt = localStorage.getItem("token");
    return jwt;
  }
}

const api = new MyApi({
  BASE_URL: config.MY_API_URL,
  headers: { "content-type": "application/json" },
});

export default api;
