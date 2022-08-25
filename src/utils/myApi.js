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
    });
  }

  login(data) {
    return fetch(`${this.BASE_URL}/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    });
  }

  auth() {
    const jwt = this._getJWT();

    return fetch(`${this.BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    });
  }

  updateUser(data) {
    return fetch(`${this.BASE_URL}/users/me`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${this._getJWT()}`,
      },
      body: JSON.stringify(data),
    });
  }

  _getJWT() {
    const jwt = localStorage.getItem("token");
    return jwt;
  }
}

const api = new MyApi({
  BASE_URL: "http://localhost:3001",
  headers: { "content-type": "application/json" },
});

export default api;
