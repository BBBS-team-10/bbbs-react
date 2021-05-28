import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import CalendarCard from './CalendarCard';
// import PopupCalendarSignin from './PopupCalendarSignin';
// import PopupCalendarDescription from './PopupCalendarDescription';
// import PopupCalendarConfirm from './PopupCalendarConfirm';
// import PopupCalendarDone from './PopupCalendarDone';

function Calendar({
  onCalendarInit,
  calendarData,
  onOpenCalendarDescriptionPopup,
  onAppointCalendarClick,
  monthList,
  // ---------------
  // clickedCalendarCard,
  // onPopupCloseClick,
  // onSubmitAppointCalendarClick,
  // isPopupCalendarSigninOpen,
  // onPopupCalendarSigninOpen,
  // onPopupCalendarSigninClose,
  // onPopupCalendarSigninLoogedIn,
  // isPopupCalendarDescriptionOpen,
  // isPopupCalendarConfirmOpen,
  // isPopupCalendarDoneOpen,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  // const customModalStyles = {
  //   overlay: {
  //     backgroundColor: 'rgba(0, 0, 0, .5)',
  //     overflow: 'scroll',
  //     display: 'flex',
  //   },
  //   content: {
  //     background: 'none',
  //     border: 'none',
  //     overflow: 'visible',
  //     margin: '0 auto 0',
  //     maxWidth: '770px',
  //     maxHeight: '100vh',
  //     padding: '0',
  //     display: 'flex',
  //     justifyContent: 'center',
  //   },
  // };

  React.useEffect(() => {
    onCalendarInit();
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
                onOpenCalendarDescriptionPopup={onOpenCalendarDescriptionPopup}
                onAppointCalendarCardClick={onAppointCalendarClick}
              />
            ))}
          </>
        </section>
      </div>
      {/* <Modal isOpen={isPopupCalendarSigninOpen} style={customModalStyles}>
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
      </Modal> */}
    </>
  );
}

Calendar.defaultProps = {
  onCalendarInit: undefined,
  calendarData: [],
  onOpenCalendarDescriptionPopup: undefined,
  onAppointCalendarClick: undefined,
  monthList: [],
  // isPopupCalendarSigninOpen: false,
  // isPopupCalendarDescriptionOpen: false,
  // onPopupCalendarSigninClose: undefined,
  // onPopupCalendarSigninLoogedIn: undefined,
  // clickedCalendarCard: [],
  // onPopupCloseClick: undefined,
  // isPopupCalendarConfirmOpen: false,
  // onSubmitAppointCalendarClick: undefined,
  // isPopupCalendarDoneOpen: false,
  // onPopupCalendarSigninOpen: undefined,
};

Calendar.propTypes = {
  onCalendarInit: PropTypes.func,
  calendarData: PropTypes.instanceOf(Array),
  onOpenCalendarDescriptionPopup: PropTypes.func,
  onAppointCalendarClick: PropTypes.func,
  monthList: PropTypes.instanceOf(Array),
  // isPopupCalendarSigninOpen: PropTypes.bool,
  // isPopupCalendarDescriptionOpen: PropTypes.bool,
  // onPopupCalendarSigninClose: PropTypes.func,
  // onPopupCalendarSigninLoogedIn: PropTypes.func,
  // clickedCalendarCard: PropTypes.instanceOf(Object),
  // onPopupCloseClick: PropTypes.func,
  // isPopupCalendarConfirmOpen: PropTypes.bool,
  // onSubmitAppointCalendarClick: PropTypes.func,
  // isPopupCalendarDoneOpen: PropTypes.bool,
  // onPopupCalendarSigninOpen: PropTypes.func,
};

export default Calendar;
