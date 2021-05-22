import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Helmet } from 'react-helmet';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Calendar from './Calendar';

function App() {
  const [currentUser, setCurrentUser] = useState({ login: '111' });
  const [currentCityId] = useState('1');
  const history = useHistory();

  // calendar
  const [calendarData, setCalendarData] = useState([]);

  const [monthList, setMonthList] = useState([]);

  function handelCalendarInit() {
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

    if (currentUser.login) {
      api.getCalendarCardsLogin().then((res) => {
        const cardsList = res.data.calendarCards;
        setCalendarData(cardsList);
        const newMonthList = monthListShorter(cardsList);
        setMonthList(newMonthList);
      });
    } else {
      api.getCalendarCardsLogout(currentCityId).then((res) => {
        const cardsList = res.data.calendarCards;
        setCalendarData(cardsList);
        const newMonthList = monthListShorter(cardsList);
        setMonthList(newMonthList);
      });
    }
  }

  // PopupCalendarSignin ===============================================================
  const [isPopupCalendarSigninOpen, setIsPopupCalendarSigninOpen] = useState(false);
  function handlePopupCalendarSignin(userData) {
    setCurrentUser(userData);
    setIsPopupCalendarSigninOpen(false);
  }
  function handlePopupCalendarSigninCloseClick() {
    history.push('/');
  }

  React.useEffect(() => {
    if (currentUser.login) {
      handelCalendarInit();
      setIsPopupCalendarSigninOpen(false);
    } else {
      setIsPopupCalendarSigninOpen(true);
    }
  }, [currentUser]);

  // PopupCalendarDescription==================================================
  const [isPopupCalendarDescriptionOpen, setIsPopupCalendarDescriptionOpen] = useState(false);
  const [clickedCalendarCard, setClickedCalendarCard] = useState([]);

  function handleOpenCalendarCardClick(card) {
    setClickedCalendarCard(card);
    setIsPopupCalendarDescriptionOpen(true);
  }

  // PopupCalendarConfirm==========================================================
  const [isPopupCalendarConfirmOpen, setIsPopupCalendarConfirmOpen] = useState(false);

  // записаться/отписаться от события
  function handleChangelAppoitnCalendar(card, bool) {
    const newCardsArray = calendarData.slice(0);
    const ind = newCardsArray.indexOf(card);
    newCardsArray[ind].booked = bool;
    setCalendarData(newCardsArray);
  }

  // PopupCalendarDone===============================================================
  const [ispopupCalendarDoneOpen, setIspopupCalendarDoneOpen] = useState(false);

  // подтверждение на основной странице
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
            <Helmet>
              <title>Календарь</title>
            </Helmet>
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
