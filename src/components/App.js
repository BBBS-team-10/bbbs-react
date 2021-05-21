import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

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
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();

  // calendar
  const [calendarData, setCalendarData] = useState([]);
  const calendarCardsData = [
    {
      id: 1,
      booked: true,
      address: 'Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)',
      contact: 'Александра, +7 926 356-78-90',
      title: 'Субботний meet up-1: учимся проходить интевью',
      description:
        'Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса сейчас не так много, а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба &quot;Наставник PRO&quot;, которую мы хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными.',
      startAt: '2021-05-10T06:00:00Z',
      endAt: '2021-05-10T08:00:00Z',
      seats: 100,
      takenSeats: 0,
      city: 1,
    },
    {
      id: 2,
      booked: false,
      address: 'Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)',
      contact: 'Федор, +7 926 356-78-90',
      title: 'Субботний meet up-2: учимся проходить интевью',
      description:
        'Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса сейчас не так много, а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба &quot;Наставник PRO&quot;, которую мы хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными.',
      startAt: '2021-05-10T02:00:00Z',
      endAt: '2021-05-10T04:00:00Z',
      seats: 100,
      takenSeats: 49,
      city: 1,
    },
    {
      id: 3,
      booked: false,
      address: 'Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)',
      contact: 'Яна, +7 926 356-78-90',
      title: 'Субботний meet up-3: учимся проходить интевью',
      description:
        'Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса сейчас не так много, а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба &quot;Наставник PRO&quot;, которую мы хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными.',
      startAt: '2021-05-10T05:00:00Z',
      endAt: '2021-05-10T07:00:00Z',
      seats: 100,
      takenSeats: 100,
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

  // PopupCalendarSignin
  const [isPopupCalendarSigninOpen, setIsPopupCalendarSigninOpen] = useState(true);
  function handlePopupCalendarSignin(userData) {
    setCurrentUser(userData);
    setIsPopupCalendarSigninOpen(false);
  }
  function handlePopupCalendarSigninCloseClick() {
    history.push('/');
  }

  React.useEffect(() => {
    handelCalendarInit();
    if (currentUser.login) {
      setIsPopupCalendarSigninOpen(false);
    } else {
      setIsPopupCalendarSigninOpen(true);
    }
  }, []);

  // PopupCalendarDescription
  const [isPopupCalendarDescriptionOpen, setIsPopupCalendarDescriptionOpen] = useState(false);
  const [clickedCalendarCard, setClickedCalendarCard] = useState([]);

  function handleOpenCalendarCardClick(card) {
    setClickedCalendarCard(card);
    setIsPopupCalendarDescriptionOpen(true);
  }

  // close all popups
  function handlePopupCloseClick() {
    setIsPopupCalendarSigninOpen(false);
    setIsPopupCalendarDescriptionOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/calendar">
            <Calendar
              calendarData={calendarData}
              isPopupCalendarSigninOpen={isPopupCalendarSigninOpen}
              isPopupCalendarDescriptionOpen={isPopupCalendarDescriptionOpen}
              onPopupCalendarSigninClose={handlePopupCalendarSigninCloseClick}
              onPopupCalendarSignin={handlePopupCalendarSignin}
              onOpenCalendarCardClick={handleOpenCalendarCardClick}
              clickedCalendarCard={clickedCalendarCard}
              onPopupCloseClick={handlePopupCloseClick}
            />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
