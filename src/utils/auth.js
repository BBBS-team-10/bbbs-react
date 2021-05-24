const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

class Auth {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  login(userData) {
    mock.onPost(`${this.baseUrl}/signin`).reply(200, {
      data: userData,
    });
    return axios
      .post(`${this.baseUrl}/signin`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userData }),
      })
      .then((res) => res);
  }
}

const auth = new Auth({
  baseUrl: 'http://127.0.0.1:8000/api/v1/',
});

export default auth;
