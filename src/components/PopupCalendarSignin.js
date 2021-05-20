import React from 'react';
import PropTypes from 'prop-types';

function PopupCalendarSignin({ onCloseClick }) {
  return (
    <div className="popup popup_type_sign-in popup_opened">
      <form className="popup__container popup__container_type_sign-in">
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
        <input type="text" className="popup__input" required placeholder="Логин" />
        <input type="password" className="popup__input" required placeholder="Пароль" />
        <p className="popup__forgot-password ">Забыли пароль?</p>
        <button className="button button_theme_light popup__enter" type="button" disabled>
          Войти
        </button>
      </form>
    </div>
  );
}

PopupCalendarSignin.defaultProps = {
  onCloseClick: undefined,
};

PopupCalendarSignin.propTypes = {
  onCloseClick: PropTypes.func,
};

export default PopupCalendarSignin;
