import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function CalendarCard({ card }) {
  const monthOfMeeting = format(new Date(card.startAt), 'LLLL', { locale: ru });
  const dayNameOfMeeting = format(new Date(card.startAt), 'EEEE', { locale: ru });
  const dayNumberOfMeeting = format(new Date(card.startAt), 'd', { locale: ru });
  const hourStartOfMeeting = format(new Date(card.startAt), 'k', { locale: ru });
  const minuteStartOfMeeting = format(new Date(card.startAt), 'mm', { locale: ru });
  const hourEndOfMeeting = format(new Date(card.endAt), 'k', { locale: ru });
  const minuteEndOfMeeting = format(new Date(card.endAt), 'mm', { locale: ru });
  const freeSeats = card.seats - card.takenSeats;
  let freeSeatsText = '';
  if (card.booked) {
    freeSeatsText = '';
  } else if (freeSeats > 0) {
    freeSeatsText = `Осталось ${freeSeats} мест`;
  } else {
    freeSeatsText = 'Запись закрыта';
  }
  return (
    <article className={`calendar ${card.booked ? 'calendar_selected' : ''}`}>
      <div className="calendar__caption">
        <div className="calendar__info">
          <p className="calendar__type">Волонтёры + дети</p>
          <p className="calendar__weekday">{`${monthOfMeeting} / ${dayNameOfMeeting}`}</p>
        </div>
        <div className="calendar__about">
          <h2 className="section-title calendar__title">{card.title}</h2>
          <p className="calendar__date">{dayNumberOfMeeting}</p>
        </div>
      </div>
      <div className="calendar__meetup">
        <ul className="calendar__info-list">
          <li className="calendar__info-item">
            <p className="calendar__time">{`${hourStartOfMeeting}:${minuteStartOfMeeting} – ${hourEndOfMeeting}:${minuteEndOfMeeting}`}</p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__place">{card.address}</p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__contact">{card.contact}</p>
          </li>
        </ul>
        <div className="calendar__submit">
          <button
            className="button button_theme_light calendar__button calendar__button_selected calendar__button_action_sign-up"
            type="button"
          >
            Отменить запись
          </button>
          <p className="calendar__place-left">{freeSeatsText}</p>
          <button className="button calendar__button-dots button_theme_light" type="button">
            &#8226;&#8226;&#8226;
          </button>
        </div>
      </div>
    </article>
  );
}

CalendarCard.defaultProps = {
  card: [],
};

CalendarCard.propTypes = {
  card: PropTypes.instanceOf(Object),
};

export default CalendarCard;
