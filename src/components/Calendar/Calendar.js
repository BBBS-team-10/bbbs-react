import React from 'react';
import './Calendar.scss';
import '../../vendor/_mixins.scss';
import '../../vendor/_variables.scss';

// import SearchForm from '../SearchForm/SearchForm';

function Calendar() {
  return (
    <div classNameName="main">
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
    </div>
  );
}

export default Calendar;
