import React from 'react';

function BlockAbout() {
  return (
    <article className="card card_color_green stub">
      <div className="stub__upper-element">
        <a href="./index.html">
          <img src="./images/svg/calendar_logo.svg" alt="Логотип Старшие Братья Старшие Сестры России" className="stub__logo" />
        </a>
      </div>
      <div className="stub__content">
        <h2 className="section-title stub__text">Наставники.про – цифоровая информационная платформа огрганизации «Старшие Братья Старшие Сестры». Созданная для поддержки наставников программы.</h2>
      </div>
    </article>
  );
}

export default BlockAbout;