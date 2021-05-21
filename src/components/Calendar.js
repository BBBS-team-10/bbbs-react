import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import { useFormWithValidation } from '../hooks/useForm';

import CalendarCard from './CalendarCard';
import PopupCalendarSignin from './PopupCalendarSignin';
import PopupCalendarDescription from './PopupCalendarDescription';

function Calendar({
  calendarData,
  isPopupCalendarSigninOpen,
  isPopupCalendarDescriptionOpen,
  onPopupCalendarSigninClose,
  onPopupCalendarSignin,
  onOpenCalendarCardClick,
  clickedCalendarCard,
  onPopupCloseClick,
}) {
  const { values, handleChange, isValid, resetForm, setIsValid } = useFormWithValidation();
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
      margin: '50px auto 0',
      maxWidth: '770px',
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
    },
  };

  // PopupCalendarSignin
  React.useEffect(() => {
    if (!currentUser.login) {
      resetForm();
      setIsValid(false);
    }
  }, [currentUser, isPopupCalendarSigninOpen, resetForm, setIsValid]);

  function handlePopupCalendarSigninSubmit() {
    onPopupCalendarSignin({
      login: values.login,
      password: values.password,
    });
  }

  // PopupCalendarDescription

  Modal.setAppElement('#root');
  return (
    <>
      <div className="main">
        <section className="lead page__section">
          <h1 className="main-title">Календарь</h1>
          <div className="tags">
            <ul className="tags__list">
              <li className="tags__list-item">
                <button className="button tags__button tags__button_active" type="button">
                  Декабрь
                </button>
              </li>
              <li className="tags__list-item">
                <button className="button tags__button" type="button">
                  Январь
                </button>
              </li>
              <li className="tags__list-item">
                <button className="button tags__button" type="button">
                  Февраль
                </button>
              </li>
              <li className="tags__list-item">
                <button className="button tags__button" type="button">
                  Март
                </button>
              </li>
              <li className="tags__list-item">
                <button className="button tags__button" type="button">
                  Апрель
                </button>
              </li>
              <li className="tags__list-item">
                <button className="button tags__button" type="button">
                  Май
                </button>
              </li>
              <li className="tags__list-item">
                <button className="button tags__button" type="button">
                  Июнь
                </button>
              </li>
            </ul>
            <ul className="tags__list">
              <li className="tags__list-item">
                <button className="button tags__button" type="button">
                  Июль
                </button>
              </li>
              <li className="tags__list-item">
                <button className="button tags__button" type="button">
                  Август
                </button>
              </li>
              <li className="tags__list-item">
                <button className="button tags__button" type="button">
                  Сентябрь
                </button>
              </li>
              <li className="tags__list-item">
                <button className="button tags__button" type="button">
                  Октябрь
                </button>
              </li>
              <li className="tags__list-item">
                <button className="button tags__button" type="button">
                  Ноябрь
                </button>
              </li>
            </ul>
          </div>
        </section>

        <section className="calendar-container page__section">
          <>
            {calendarData.map((item) => (
              <CalendarCard
                key={item.id}
                id={item.id}
                card={item}
                onOpenCalendarCardClick={onOpenCalendarCardClick}
              />
            ))}
          </>
        </section>
      </div>
      <Modal isOpen={isPopupCalendarSigninOpen} style={customModalStyles}>
        <PopupCalendarSignin
          onCloseClick={onPopupCalendarSigninClose}
          onSubmit={handlePopupCalendarSigninSubmit}
          isFormValid={isValid}
          handleChange={handleChange}
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
        />
      </Modal>
      {/*
      <PopupCalendarConfirm />
      <PopupCalendarDone /> */}
    </>
  );
}

Calendar.defaultProps = {
  calendarData: [],
  isPopupCalendarSigninOpen: false,
  isPopupCalendarDescriptionOpen: false,
  onPopupCalendarSigninClose: undefined,
  onPopupCalendarSignin: undefined,
  onOpenCalendarCardClick: undefined,
  clickedCalendarCard: [],
  onPopupCloseClick: undefined,
};

Calendar.propTypes = {
  calendarData: PropTypes.instanceOf(Array),
  isPopupCalendarSigninOpen: PropTypes.bool,
  isPopupCalendarDescriptionOpen: PropTypes.bool,
  onPopupCalendarSigninClose: PropTypes.func,
  onPopupCalendarSignin: PropTypes.func,
  onOpenCalendarCardClick: PropTypes.func,
  clickedCalendarCard: PropTypes.instanceOf(Array),
  onPopupCloseClick: PropTypes.func,
};

export default Calendar;
