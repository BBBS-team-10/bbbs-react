import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import { useFormWithValidation } from '../hooks/useForm';

import CalendarCard from './CalendarCard';
import PopupCalendarSignin from './PopupCalendarSignin';

function Calendar({
  calendarData,
  isPopupCalendarSigninOpen,
  onPopupCalendarSigninClose,
  onPopupCalendarSignin,
}) {
  const { values, handleChange, isValid, resetForm, setIsValid } = useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (!currentUser.login) {
      resetForm();
      setIsValid(true);
    }
  }, [currentUser, isPopupCalendarSigninOpen, resetForm, setIsValid]);

  function handlePopupCalendarSigninSubmit() {
    onPopupCalendarSignin({
      login: values.login,
      password: values.password,
    });
  }

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
              <CalendarCard key={item.id} card={item} />
            ))}
          </>
        </section>
      </div>
      <Modal
        isOpen={isPopupCalendarSigninOpen}
        // onRequestClose={() => { }}
        // shouldCloseOnOverlayClick
      >
        <PopupCalendarSignin
          onCloseClick={onPopupCalendarSigninClose}
          onSubmit={handlePopupCalendarSigninSubmit}
          isFormValid={isValid}
          handleChange={handleChange}
        />
      </Modal>
      {/* <PopupCalendarDescription />
      <PopupCalendarConfirm />
      <PopupCalendarDone /> */}
    </>
  );
}

Calendar.defaultProps = {
  calendarData: [],
  isPopupCalendarSigninOpen: false,
  onPopupCalendarSigninClose: undefined,
  onPopupCalendarSignin: undefined,
};

Calendar.propTypes = {
  calendarData: PropTypes.instanceOf(Array),
  isPopupCalendarSigninOpen: PropTypes.bool,
  onPopupCalendarSigninClose: PropTypes.func,
  onPopupCalendarSignin: PropTypes.func,
};

export default Calendar;
