import calendarCardsList from './calendarCardsList';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
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
      .then((res) => res);
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
      .then((res) => res);
  }
}

const api = new Api({
  baseUrl: 'http://127.0.0.1:8000/api/v1/',
});

export default api;
