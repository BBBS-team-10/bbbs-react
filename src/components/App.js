import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

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
  const [currentUser, setCurrentUser] = useState({ login: '111' });
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
      startAt: '2021-05-11T06:00:00Z',
      endAt: '2021-05-11T08:00:00Z',
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
      startAt: '2021-05-17T02:00:00Z',
      endAt: '2021-05-17T04:00:00Z',
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
      startAt: '2021-06-19T05:00:00Z',
      endAt: '2021-06-19T07:00:00Z',
      seats: 100,
      takenSeats: 100,
      city: 1,
    },
    {
      id: 4,
      booked: false,
      address: 'Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)',
      contact: 'Яна, +7 926 356-78-90',
      title: 'Субботний meet up-4: учимся проходить интевью',
      description:
        'Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса сейчас не так много, а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба &quot;Наставник PRO&quot;, которую мы хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными.',
      startAt: '2021-09-19T01:00:00Z',
      endAt: '2021-09-19T05:00:00Z',
      seats: 100,
      takenSeats: 93,
      city: 1,
    },
  ];
  const [monthList, setMonthList] = useState([]);

  function handelCalendarInit() {
    mock.onGet('/calendar').reply(200, {
      calendarCards: calendarCardsData,
    });

    axios.get('/calendar').then((res) => {
      const cardsList = res.data.calendarCards;
      setCalendarData(cardsList);
      const monthListShorter = (arr) => {
        const result = [];
        for (let i = 0; i < arr.length; i += 1) {
          const data = format(new Date(arr[i].startAt), 'LLLL', { locale: ru });
          if (!result.includes(data)) {
            result.push(data);
          }
        }
        return result;
      };
      const newMonthList = monthListShorter(cardsList);
      setMonthList(newMonthList);
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

  // PopupCalendarDescription==================================================
  const [isPopupCalendarDescriptionOpen, setIsPopupCalendarDescriptionOpen] = useState(false);
  const [clickedCalendarCard, setClickedCalendarCard] = useState([]);

  function handleOpenCalendarCardClick(card) {
    setClickedCalendarCard(card);
    setIsPopupCalendarDescriptionOpen(true);
  }

  // PopupCalendarConfirm==========================================================
  const [isPopupCalendarConfirmOpen, setIsPopupCalendarConfirmOpen] = useState(false);

  function handleChangelAppoitnCalendar(card, bool) {
    const newCardsArray = calendarData.slice(0);
    const ind = newCardsArray.indexOf(card);
    newCardsArray[ind].booked = bool;
    setCalendarData(newCardsArray);
  }

  // PopupCalendarDone===============================================================
  const [ispopupCalendarDoneOpen, setIspopupCalendarDoneOpen] = useState(false);

  // на основной странице
  function handleAppointCalendarCardClick(card) {
    if (!card.booked) {
      setClickedCalendarCard(card);
      setIsPopupCalendarConfirmOpen(true);
    } else {
      handleChangelAppoitnCalendar(card, false);
    }
  }

  // close all popups========================================================================
  function handlePopupCloseClick() {
    setIsPopupCalendarSigninOpen(false);
    setIsPopupCalendarDescriptionOpen(false);
    setIsPopupCalendarConfirmOpen(false);
    setIspopupCalendarDoneOpen(false);
  }

  // подтверждение или запись в попапе
  function handleSubmitAppointCalendarClick(card) {
    if (!card.booked) {
      handleChangelAppoitnCalendar(card, true);
      handlePopupCloseClick();
      setIspopupCalendarDoneOpen(true);
    } else {
      handleChangelAppoitnCalendar(card, false);
      handlePopupCloseClick();
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/calendar">
            <Calendar
              calendarData={calendarData}
              isPopupCalendarSigninOpen={isPopupCalendarSigninOpen}
              onPopupCalendarSigninClose={handlePopupCalendarSigninCloseClick}
              onPopupCalendarSignin={handlePopupCalendarSignin}
              isPopupCalendarDescriptionOpen={isPopupCalendarDescriptionOpen}
              onOpenCalendarCardClick={handleOpenCalendarCardClick}
              clickedCalendarCard={clickedCalendarCard}
              onPopupCloseClick={handlePopupCloseClick}
              isPopupCalendarConfirmOpen={isPopupCalendarConfirmOpen}
              onAppointCalendarCardClick={handleAppointCalendarCardClick}
              onSubmitAppointCalendarClick={handleSubmitAppointCalendarClick}
              onCancelPopupClick={handlePopupCloseClick}
              ispopupCalendarDoneOpen={ispopupCalendarDoneOpen}
              monthList={monthList}
            />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
