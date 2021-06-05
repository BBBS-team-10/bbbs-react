import React from 'react';
import PropTypes from 'prop-types';

function PopupCalendarError({ onCloseClick }) {
  return (
    <form className="popup__container popup__container_type_error">
      <button
        className="popup__close popup__cancel"
        type="button"
        aria-label="Close"
        onClick={onCloseClick}
      />
      <h2 className="section-title calendar__title_type_popup calendar__title_type_popup-error ">
        Что-то пошло не так, попробуйте записаться снова
      </h2>
      <button
        className="button calendar__back calendar__back_type_error popup__cancel"
        type="button"
        onClick={onCloseClick}
      >
        Вернуться к мероприятию
      </button>
    </form>
  );
}

PopupCalendarError.defaultProps = {
  onCloseClick: undefined,
};

PopupCalendarError.propTypes = {
  onCloseClick: PropTypes.func,
};

export default PopupCalendarError;
