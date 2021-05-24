import MockedMainPageData from './mocks';
/*  eslint no-underscore-dangle: ["error", { "allowAfterThis": true }]  */
const axios = require('axios');

const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

mock
  .onGet('http://127.0.0.1:8000/api/v1/users', { headers: { 'Content-Type': 'application/json' } })
  .reply(200, MockedMainPageData);

class Api {
  constructor(baseUrl, options) {
    this._baseUrl = baseUrl;
    this._options = options;
  }

  static _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  getMainPageInfo() {
    return axios.get(`${this._baseUrl}/users`, this._options).then(this._checkResponse);
  }
}

const api = new Api('http://127.0.0.1:8000/api/v1', {
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api as default };
