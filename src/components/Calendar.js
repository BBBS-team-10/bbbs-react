import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import CalendarCard from './CalendarCard';
import PopupCalendarSignin from './PopupCalendarSignin';
import PopupCalendarDescription from './PopupCalendarDescription';
import PopupCalendarConfirm from './PopupCalendarConfirm';
import PopupCalendarDone from './PopupCalendarDone';

function Calendar({
  onCalendarInit,
  calendarData,
  onOpenCalendarCardClick,
  clickedCalendarCard,
  onPopupCloseClick,
  onAppointCalendarClick,
  onSubmitAppointCalendarClick,
  monthList,
  isPopupCalendarSigninOpen,
  onPopupCalendarSigninOpen,
  onPopupCalendarSigninClose,
  onPopupCalendarSigninLoogedIn,
  isPopupCalendarDescriptionOpen,
  isPopupCalendarConfirmOpen,
  isPopupCalendarDoneOpen,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const customModalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, .5)',
      overflow: 'scroll',
      display: 'flex',
    },
    content: {
      background: 'none',
      border: 'none',
      overflow: 'visible',
      margin: '0 auto 0',
      maxWidth: '770px',
      maxHeight: '100vh',
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
    },
  };

  React.useEffect(() => {
    if (currentUser.login) {
      onCalendarInit();
      onPopupCalendarSigninOpen(false);
    } else {
      onPopupCalendarSigninOpen(true);
    }
  }, [currentUser]);

  const [cardsListFiltered, setCardsListFiltered] = useState([]);
  const [monthChecked, setMonthChecked] = useState('');

  function getMonthName(card) {
    return format(new Date(card.startAt), 'LLLL', { locale: ru });
  }

  function handleMonthElementClick(e) {
    setMonthChecked(e.target.id);
    setCardsListFiltered(calendarData.filter((item) => getMonthName(item) === e.target.id));
  }
  React.useEffect(() => {
    if (calendarData) {
      setCardsListFiltered(calendarData.slice(0));
    }
  }, [monthList]);

  Modal.setAppElement('#root');
  return (
    <>
      <div className="main">
        <section className="lead page__section">
          <h1 className="main-title">Календарь</h1>
          <div className="tags calendar__tags">
            <ul className="tags__list tags__list_type_calendar">
              {monthList.map((item) => (
                <li className="tags__list-item" key={item}>
                  <button
                    className={`button tags__button ${
                      item === monthChecked && 'tags__button_active'
                    }`}
                    type="button"
                    onClick={handleMonthElementClick}
                    id={item}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="calendar-container page__section">
          <>
            {cardsListFiltered.map((item) => (
              <CalendarCard
                key={item.id}
                id={item.id}
                card={item}
                onOpenCalendarCardClick={onOpenCalendarCardClick}
                onAppointCalendarCardClick={onAppointCalendarClick}
              />
            ))}
          </>
        </section>
      </div>
      <Modal isOpen={isPopupCalendarSigninOpen} style={customModalStyles}>
        <PopupCalendarSignin
          onCloseClick={onPopupCalendarSigninClose}
          onSubmit={onPopupCalendarSigninLoogedIn}
        />
      </Modal>

      <Modal
        isOpen={isPopupCalendarDescriptionOpen}
        onRequestClose={() => {
          onPopupCloseClick();
        }}
        shouldCloseOnOverlayClick
        style={customModalStyles}
      >
        <PopupCalendarDescription
          clickedCalendarCard={clickedCalendarCard}
          onCloseClick={onPopupCloseClick}
          onSubmitAppointCalendarClick={onSubmitAppointCalendarClick}
        />
      </Modal>

      <Modal
        isOpen={isPopupCalendarConfirmOpen}
        onRequestClose={() => {
          onPopupCloseClick();
        }}
        shouldCloseOnOverlayClick
        style={customModalStyles}
      >
        <PopupCalendarConfirm
          clickedCalendarCard={clickedCalendarCard}
          onSubmitAppointCalendarClick={onSubmitAppointCalendarClick}
          onCloseClick={onPopupCloseClick}
        />
      </Modal>

      <Modal
        isOpen={isPopupCalendarDoneOpen}
        onRequestClose={() => {
          onPopupCloseClick();
        }}
        shouldCloseOnOverlayClick
        style={customModalStyles}
      >
        <PopupCalendarDone
          clickedCalendarCard={clickedCalendarCard}
          onCloseClick={onPopupCloseClick}
        />
      </Modal>
    </>
  );
}

Calendar.defaultProps = {
  calendarData: [],
  monthList: [],
  isPopupCalendarSigninOpen: false,
  isPopupCalendarDescriptionOpen: false,
  onPopupCalendarSigninClose: undefined,
  onPopupCalendarSigninLoogedIn: undefined,
  onOpenCalendarCardClick: undefined,
  clickedCalendarCard: [],
  onPopupCloseClick: undefined,
  isPopupCalendarConfirmOpen: false,
  onAppointCalendarClick: undefined,
  onSubmitAppointCalendarClick: undefined,
  isPopupCalendarDoneOpen: false,
  onCalendarInit: undefined,
  onPopupCalendarSigninOpen: undefined,
};

Calendar.propTypes = {
  calendarData: PropTypes.instanceOf(Array),
  monthList: PropTypes.instanceOf(Array),
  isPopupCalendarSigninOpen: PropTypes.bool,
  isPopupCalendarDescriptionOpen: PropTypes.bool,
  onPopupCalendarSigninClose: PropTypes.func,
  onPopupCalendarSigninLoogedIn: PropTypes.func,
  onOpenCalendarCardClick: PropTypes.func,
  clickedCalendarCard: PropTypes.instanceOf(Object),
  onPopupCloseClick: PropTypes.func,
  isPopupCalendarConfirmOpen: PropTypes.bool,
  onAppointCalendarClick: PropTypes.func,
  onSubmitAppointCalendarClick: PropTypes.func,
  isPopupCalendarDoneOpen: PropTypes.bool,
  onCalendarInit: PropTypes.func,
  onPopupCalendarSigninOpen: PropTypes.func,
};

export default Calendar;
