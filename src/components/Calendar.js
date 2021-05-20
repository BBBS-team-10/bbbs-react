import React from 'react';
import PropTypes from 'prop-types';

import CalendarCard from './CalendarCard';

function Calendar({ onInit, calendarData }) {
  React.useEffect(() => {
    onInit();
  }, []);

  return (
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
  );
}

Calendar.defaultProps = {
  onInit: undefined,
  calendarData: [],
};

Calendar.propTypes = {
  onInit: PropTypes.func,
  calendarData: PropTypes.instanceOf(Array),
};

export default Calendar;
