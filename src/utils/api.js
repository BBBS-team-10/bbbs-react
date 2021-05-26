import calendarCardsList from './calendarCardsList';
import MockedMainPageData from './mocks';

const axios = require('axios');

const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  static checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  getCalendarCardsLoggedIn() {
    mock.onGet(`${this.baseUrl}/afisha/events/`).reply(200, {
      calendarCards: calendarCardsList,
    });
    return axios
      .get(`${this.baseUrl}/afisha/events/`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIwNTM4NDU2LCJqdGkiOiIwMTJjMTMzNGQ5MjM0MWI4YWU1YmJhMDExYjAyMTdjOCIsInVzZXJfaWQiOjF9.S4JVKaVnUzr_XmLXOs6pfYKsLBhzEzm9Rhj1jnW6fhc',
        },
      })
      .then(this.checkResponse);
  }

  getCalendarCardsLoggedOut(guestCity) {
    mock.onGet(`${this.baseUrl}/afisha/events/`).reply(200, {
      calendarCards: calendarCardsList,
    });
    return axios
      .get(`${this.baseUrl}/afisha/events/`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        data: { city: guestCity },
      })
      .then(this.checkResponse);
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
      .then(this.checkResponse);
  }

  getMainPageInfo() {
    mock
      .onGet('http://127.0.0.1:8000/api/v1/users', {
        headers: { 'Content-Type': 'application/json' },
      })
      .reply(200, MockedMainPageData);

    return axios
      .get(`${this.baseUrl}/users`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(this.checkResponse);
  }
}

const api = new Api({
  baseUrl: 'http://127.0.0.1:8000/api/v1',
});

export default api;
