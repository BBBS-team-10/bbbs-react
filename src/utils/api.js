// const axios = require('axios');
// const MockAdapter = require('axios-mock-adapter');

// const mock = new MockAdapter(axios);

// class Api {
//   constructor({ headers }) {
//     this._headers = headers;
//   }

//   _handleOriginalResponse(response) {
//     if (!response.ok) {
//       return Promise.reject(`Error: ${response}`);
//     }
//     return response.json();
//   }

//   getCalendarInfo() {
//     return axios
//       .get(`${this._baseUrl}/calendar`, {
//         credentials: 'include',
//         headers: this._headers,
//       })
//       .then(this._handleOriginalResponse);
//   }
// }

// const api = new Api({
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default api;
