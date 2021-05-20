import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// import { Helmet } from 'react-helmet';
// import Modal from 'react-modal';
// import lottie from 'lottie-web';
// import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';
// import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Calendar from './Calendar';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

function App() {
  const [calendarData, setCalendarData] = useState([]);
  const calendarCardsData = [
    {
      id: 1,
      booked: true,
      address: 'Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)',
      contact: 'Александра, +7 926 356-78-90',
      title: 'Субботний meet up: учимся проходить интевью',
      description:
        'Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса сейчас не так много, а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба "Наставник PRO", которую мы хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными.',
      startAt: '2021-05-10T06:00:00Z',
      endAt: '2021-05-10T08:00:00Z',
      seats: 100,
      takenSeats: 0,
      city: 1,
    },
  ];

  function handelCalendarInit() {
    mock.onGet('/calendar').reply(200, {
      calendarCards: calendarCardsData,
    });

    axios.get('/calendar').then((res) => {
      setCalendarData(res.data.calendarCards);
    });
  }

  return (
    <CurrentUserContext.Provider value={[]}>
      <div className="page">
        <Switch>
          <Route exact path="/calendar">
            <Calendar onInit={handelCalendarInit} calendarData={calendarData} />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
