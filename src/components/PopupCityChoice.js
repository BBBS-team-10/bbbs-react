import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

function PopupCityChoice({ isOpen, onClose }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={`popup popup_type_cities cities ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_type_cities">
        <h2 className="cities__title section-title">Выберите ваш город</h2>
        <ul className="cities__capitals">
          <li className="cities__name">
            <NavLink to={currentPath} className="cities__link" onClick={onClose}>
              Москва
            </NavLink>
          </li>
          <li className="cities__name">
            <NavLink to={currentPath} className="cities__link" onClick={onClose}>
              Санкт-Петербург
            </NavLink>
          </li>
        </ul>
        <ul className="cities__region">
          <li className="cities__name">
            <NavLink to={currentPath} className="cities__link" onClick={onClose}>
              Алексин
            </NavLink>
          </li>
          <li className="cities__name">
            <NavLink to={currentPath} className="cities__link" onClick={onClose}>
              Барнаул
            </NavLink>
          </li>
          <li className="cities__name">
            <NavLink to={currentPath} className="cities__link" onClick={onClose}>
              Екатеринбург
            </NavLink>
          </li>
          <li className="cities__name">
            <NavLink to={currentPath} className="cities__link" onClick={onClose}>
              Зубцов
            </NavLink>
          </li>
          <li className="cities__name">
            <NavLink to={currentPath} className="cities__link" onClick={onClose}>
              Калининград
            </NavLink>
          </li>
          <li className="cities__name">
            <NavLink to={currentPath} className="cities__link" onClick={onClose}>
              Киреевск
            </NavLink>
          </li>
          <li className="cities__name">
            <NavLink to={currentPath} className="cities__link" onClick={onClose}>
              Коломна
            </NavLink>
          </li>
          <li className="cities__name">
            <NavLink to={currentPath} className="cities__link" onClick={onClose}>
              Новомосковск
            </NavLink>
          </li>
          <li className="cities__name">
            <NavLink to={currentPath} className="cities__link" onClick={onClose}>
              Орехово-Зуево
            </NavLink>
          </li>
          <li className="cities__name">
            <NavLink to={currentPath} className="cities__link" onClick={onClose}>
              Тверь
            </NavLink>
          </li>
          <li className="cities__name">
            <NavLink to={currentPath} className="cities__link" onClick={onClose}>
              Тула
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PopupCityChoice;

PopupCityChoice.defaultProps = {
  isOpen: false,
  onClose: undefined,
};

PopupCityChoice.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
