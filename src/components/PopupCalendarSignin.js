import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PopupCalendarSignin({
  onCloseClick, onSubmit, isFormValid, handleChange,
}) {
  function handlerSubmitForm(e) {
    e.preventDefault();
    onSubmit();
  }
  return (
    // <div className="popup popup_type_sign-in popup_opened">
    <form className="popup__container popup__container_type_sign-in" onSubmit={handlerSubmitForm}>
      <button
        className="popup__close popup__cancel"
        type="button"
        aria-label="Close"
        onClick={onCloseClick}
      />
      <h2 className="section-title popup__title_type_sign-in">Вход</h2>
      <p className="paragraph popup__sign-in">
        Вход в личный кабинет доступен наставникам программы «Старшие Братья Старшие Сёстры».
      </p>
      <p className="paragraph popup__sign-in">
        Пожалуйста, введите логин и пароль из письма. Если вам не приходило письмо, свяжитесь с
        вашим куратором.
      </p>
      <input
        type="text"
        name="login"
        className="popup__input"
        required
        placeholder="Логин"
        onChange={handleChange}
        minLength={2}
      />
      <input
        type="password"
        name="password"
        className="popup__input"
        required
        placeholder="Пароль"
        onChange={handleChange}
        minLength={6}
      />
      <Link to="/" className="popup__forgot-password">
        Забыли пароль?
      </Link>
      <button
        className="button button_theme_light popup__enter"
        type="submit"
        disabled={!isFormValid}
      >
        Войти
      </button>
    </form>
    // </div>
  );
}

PopupCalendarSignin.defaultProps = {
  onCloseClick: undefined,
  onSubmit: undefined,
  isFormValid: true,
  handleChange: undefined,
};

PopupCalendarSignin.propTypes = {
  onCloseClick: PropTypes.func,
  onSubmit: PropTypes.func,
  isFormValid: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default PopupCalendarSignin;
