import React from 'react';
import './App.css';

// import { Helmet } from 'react-helmet';
// import Modal from 'react-modal';
// import lottie from 'lottie-web';
// import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';
// import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  return (
    <CurrentUserContext.Provider value={[]}>
      <body className="page">
        <header className="header page__section">
          <nav className="menu">
            <a href="./index.html" target="_self" className="menu__logo">наставники.про</a>
            <div className="menu__lists-wrap menu__lists-wrap_hidden">
              <ul className="menu__list">
                <li className="menu__list-item">
                  <a href="./calendar.html" className="menu__link">Календарь</a>
                </li>
                <li className="menu__list-item">
                  <a href="./place.html" className="menu__link">Куда пойти</a>
                </li>
                <li className="menu__list-item">
                  <a href="./questions.html" className="menu__link">Вопросы</a>
                </li>
                <li className="menu__list-item menu__dropdown-item">
                  <a href="./read-watch-main.html" className="menu__link">Читать и смотреть</a>
                  <ul className="menu__dropdown-list">
                    <li className="menu__dropdown-list-item">
                      <a href="./catalog.html" className="link menu__dropdown-link">Справочник</a>
                    </li>
                    <li className="menu__dropdown-list-item">
                      <a href="./video.html" className="link menu__dropdown-link">Видео</a>
                    </li>
                    <li className="menu__dropdown-list-item">
                      <a href="./articles.html" className="link menu__dropdown-link">Статьи</a>
                    </li>
                    <li className="menu__dropdown-list-item">
                      <a href="./films.html" className="link menu__dropdown-link">Фильмы</a>
                    </li>
                    <li className="menu__dropdown-list-item">
                      <a href="./books.html" className="link menu__dropdown-link">Книги</a>
                    </li>
                  </ul>
                </li>
                <li className="menu__list-item">
                  <a href="./rights.html" className="menu__link">Права детей</a>
                </li>
                <li className="menu__list-item">
                  <a href="./stories.html" className="menu__link">Истории</a>
                </li>
              </ul>

              <ul className="menu__list menu__list_type_social menu__list_hidden">
                <li className="menu__list-item">
                  <a href="https://www.facebook.com/BigBrothers.BigSisters.Russia/" className="menu__link" target="_blank" rel="noreferrer">facebook</a>
                </li>
                <li className="menu__list-item">
                  <a href="https://vk.com/big.brothers.big.sisters" className="menu__link" target="_blank" rel="noreferrer">vkontakte</a>
                </li>
                <li className="menu__list-item">
                  <a href="https://www.instagram.com/nastavniki_org/" className="menu__link" target="_blank" rel="noreferrer">instagram</a>
                </li>
                <li className="menu__list-item">
                  <a href="https://www.youtube.com/user/Nastavniki/" className="menu__link" target="_blank" rel="noreferrer">youtube</a>
                </li>
              </ul>
            </div>

            <button className="menu__burger" type="button">
              <span className="menu__burger-line" />
              <span className="menu__burger-line" />
              <span className="menu__burger-line" />
            </button>

            <ul className="menu__button-list">
              <li className="menu__button-item">
                <form className="search" name="search-form">
                  <button className="menu__button menu__button_type_search search__button" type="submit" aria-label="Поиск" title="Поиск" />
                  <div className="search__options menu__search-options">
                    <input type="text" name="search" placeholder="Поиск" value="" className="search__input paragraph" />
                    <ul className="search__option-list">
                      <li className="search__option-item">
                        <a href="./article.html" className="search__title-link section-title section-title_clickable">Причины подростковой агрессии</a>
                        <a href="./article.html" className="link search__link">статьи</a>
                      </li>
                      <li className="search__option-item">
                        <a href="./video.html" className="search__title-link section-title section-title_clickable">Агрессивное поведение детей-сирот</a>
                        <a href="./video.html" className="link search__link">видео</a>
                      </li>
                      <li className="search__option-item">
                        <a href="./questions.html" className="search__title-link section-title section-title_clickable">Что делать если ваш младший агрессивно себя ведет, решил закрыть пару?</a>
                        <a href="./questions.html" className="link search__link">вопросы</a>
                      </li>
                      <li className="search__option-item">
                        <a href="./books.html" className="search__title-link section-title section-title_clickable">Как реагировать на агрессивное поведения ребенка</a>
                        <a href="./books.html" className="link search__link">книги</a>
                      </li>
                    </ul>
                  </div>
                </form>
              </li>
              <li className="menu__button-item">
                <button className="menu__button menu__button_type_user" type="button" aria-label="Личный кабинет" title="Личный кабинет" onClick="document.location='./index_active.html'" />
              </li>
            </ul>
          </nav>
        </header>

        <main className="main">
          <section className="lead page__section">
            <article className="card-container card-container_type_identical">
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
              <article className="card card_content_media">
                <img src="./images/stories/DG7B0561(1).jpg" alt="История Марины и Алины" className="card__media-img" />
                <a href="./stories.html" className="card__media-link section-title">История Марины и Алины</a>
              </article>
            </article>
          </section>

          <section className="main-section page__section">
            <article className="card-container card-container_type_main-article">
              <div className="card card_type_main card_color_yellow">
                <p className="rubric card__rubric">Выбор наставника</p>
                <div className="card__title-wrap">
                  <a href="./place.html" className="card__link-wrap">
                    <h2 className="section-title card__title">Сплав на байдарках в 2 строки</h2>
                  </a>
                  <p className="caption card__title-caption">усадьба Архангельское в две строки</p>
                </div>
                <a href="./place.html" className="card__link-wrap card__link-wrap_content_article-img">
                  <img src="./images/where-to-go/img-xl.jpg" alt="Сплав на байдарках" className="card__img" />
                </a>
                <a href="#top" className="link card__link">перейти на сайт</a>
              </div>
              <div className="card card_content_annotation card_type_main">
                <div className="card__content">
                  <p className="caption card__annotation-caption">Девочка, 10 лет. Активный</p>
                  <div className="card__annotation card__annotation_position_main-card">
                    <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и, Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и,</p>
                    <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не по Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section className="main-section page__section">
            <article className="card card_color_blue card_content_quote">
              <a href="./articles.html" className="card__link-wrap">
                <h3 className="chapter-title card__quote">Развитие детей-сирот отличается от развития детей, живущих в семьях. Все  этапы развития у детей-сирот проходят с искажениями и имеют ряд негативных  особенностей.</h3>
              </a>
              <a href="./articles.html" className="link card__link">читать статью</a>
            </article>
          </section>

          <section className="main-section page__section cards-grid cards-grid_content_small-cards">
            <article className="card card_content_video card-pagination_page_main">
              <div className="video">
                <a href="./films.html" className="card__link-wrap">
                  <img src="./images/video/video-prev.png" alt="Превью видео" className="video__img" />
                  <ul className="video__rubric-list">
                    <li>
                      <p className="rubric video__rubric">рубрика</p>
                    </li>
                    <li>
                      <p className="rubric video__rubric">рубрика</p>
                    </li>
                  </ul>
                </a>
              </div>
              <div className="card__video-info">
                <div className="card__title-wrap">
                  <h2 className="section-title card__title">Жутко громко и запредельно близко</h2>
                  <p className="caption card__title-caption">Василий Сигарев, Борисов-Мусотов (Россия), 2009 год</p>
                </div>
                <a href="./films.html" className="link card__link link_action_open-video">смотреть трейлер</a>
              </div>
            </article>

            <article className="card card_content_video card-pagination_page_main">
              <div className="video">
                <a href="./films.html" className="card__link-wrap">
                  <img src="./images/video/video-prev.png" alt="Превью видео" className="video__img" />
                  <ul className="video__rubric-list">
                    <li>
                      <p className="rubric video__rubric">рубрика</p>
                    </li>
                    <li>
                      <p className="rubric video__rubric">рубрика</p>
                    </li>
                  </ul>
                </a>
              </div>
              <div className="card__video-info">
                <div className="card__title-wrap">
                  <h2 className="section-title card__title">Жизнь Кабачка</h2>
                  <p className="caption card__title-caption">Клод Баррас, мультфильм, Швейцария, Франция, 2016</p>
                </div>
                <a href="./films.html" className="link card__link link_action_open-video">смотреть трейлер</a>
              </div>
            </article>

            <article className="card card_content_video card-pagination_page_main">
              <div className="video">
                <a href="./films.html" className="card__link-wrap">
                  <img src="./images/video/video-prev.png" alt="Превью видео" className="video__img" />
                  <ul className="video__rubric-list">
                    <li>
                      <p className="rubric video__rubric">рубрика</p>
                    </li>
                    <li>
                      <p className="rubric video__rubric">рубрика</p>
                    </li>
                  </ul>
                </a>
              </div>
              <div className="card__video-info">
                <div className="card__title-wrap">
                  <h2 className="section-title card__title">Волчок</h2>
                  <p className="caption card__title-caption">Василий Сигарев, Россия, 2009 год</p>
                </div>
                <a href="./films.html" className="link card__link link_action_open-video">смотреть трейлер</a>
              </div>
            </article>

            <article className="card card_content_video card-pagination_page_main">
              <div className="video">
                <a href="./films.html" className="card__link-wrap">
                  <img src="./images/video/video-prev.png" alt="Превью видео" className="video__img" />
                  <ul className="video__rubric-list">
                    <li>
                      <p className="rubric video__rubric">рубрика</p>
                    </li>
                    <li>
                      <p className="rubric video__rubric">рубрика</p>
                    </li>
                  </ul>
                </a>
              </div>
              <div className="card__video-info">
                <div className="card__title-wrap">
                  <h2 className="section-title card__title">Жутко громко и запредельно близко</h2>
                  <p className="caption card__title-caption">Василий Сигарев, Борисов-Мусотов (Россия), 2009 год</p>
                </div>
                <a href="./films.html" className="link card__link link_action_open-video">смотреть трейлер</a>
              </div>
            </article>
          </section>

          <section className="main-section page__section">
            <article className="card-container card-container_type_main-video">
              <div className="card card_color_yellow card_content_video-preview">
                <div className="card__title-wrap">
                  <a href="./video.html" className="card__link-wrap">
                    <h2 className="section-title card__title">Эфир с выпускником нашей программы</h2>
                  </a>
                  <p className="caption card__title-caption">Иван Рустаев, выпускник программы</p>
                </div>
                <a href="#top" className="link card__link link_action_open-video">смотреть видео</a>
              </div>
              <div className="card card_color_yellow card_content_video video">
                <a href="./video.html" className="card__link-wrap">
                  <img src="./images/video/video-main.jpg" alt="Превью видео" className="video__img video__img_position_main-video" />
                </a>
              </div>
            </article>
          </section>

          <section className="main-section page__section">
            <article className="card-container card-container_type_iframe">
              <div className="card card_color_blue card_content_media">
                <iframe title="facebook-frame" className="card__iframe" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=630&height=630&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" scrolling="no" allowFullScreen="true" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" />
              </div>
              <div className="main-questions">
                <article className="question main-questions__item">
                  <a href="./questions.html" className="main-questions__link">
                    <h2 className="section-title question__title main-questions__title">Я боюсь, что ребёнок ко мне слишком сильно привяжется. Что делать?</h2>
                  </a>
                  <p className="rubric question__rubric main-questions__rubric">рубрика</p>
                </article>

                <article className="question main-questions__item">
                  <a href="./questions.html" className="main-questions__link">
                    <h2 className="section-title question__title main-questions__title">Возможно ли продлить срок участия в программе, если и я и мой «младший» хотим остаться в программе?</h2>
                  </a>
                  <p className="rubric question__rubric main-questions__rubric">рубрика</p>
                </article>

                <article className="question main-questions__item">
                  <a href="./questions.html" className="main-questions__link">
                    <h2 className="section-title question__title main-questions__title">Что делать если Ваш младший решил закрыть пару, т.к. слишком занят с учебой и друзьями?</h2>
                  </a>
                  <p className="rubric question__rubric main-questions__rubric">рубрика</p>
                </article>
              </div>
            </article>
          </section>

          <section className="main-section page__section">
            <article className="card card_color_green card_content_quote">
              <a href="./articles.html" className="card__link-wrap">
                <h3 className="chapter-title card__quote">У таких детей возникает ощущение отверженности. Оно приводит к напряженности и  недоверию к людям и, как итог, к реальному неприятию себя и окружающих.</h3>
              </a>
              <a href="./articles.html" className="link card__link">читать статью</a>
            </article>
          </section>
        </main>

        <footer className="footer">
          <a href="./index.html" className="footer__logo" target="_self">
            <img className="footer__logo-image" src="./images/svg/footer-logo.svg" alt="Логотип Старшие Братья Старшие Сестры России" />
          </a>
          <button className="button footer__button" type="button">Помочь деньгами</button>
          <div className="footer__column footer__column_content_concept">
            <p className="footer__brand">&copy; Старшие Братья Старшие Сестры</p>
            <div className="footer__copyright">
              <p className="footer__authors">
                Разработка – студенты
                <a href="https://praktikum.yandex.ru/" className="footer__production" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
              </p>
              <p className="footer__design">
                Концепция и дизайн –
                <a href="https://krkr.design/" className="footer__production" target="_blank" rel="noreferrer">krkr.design</a>
              </p>
            </div>
          </div>
          <nav className="footer__column footer__column_content_info">
            <ul className="footer__column-list">
              <li className="footer__column-links">
                <a href="./about.html" className="footer__column-link" target="_self">о проекте</a>
              </li>
              <li className="footer__column-links">
                <a href="./calendar.html" className="footer__column-link" target="_self">календарь</a>
              </li>
              <li className="footer__column-links">
                <a href="./place.html" className="footer__column-link" target="_self">куда пойти</a>
              </li>
              <li className="footer__column-links">
                <a href="./questions.html" className="footer__column-link" target="_self">вопросы</a>
              </li>
              <li className="footer__column-links">
                <a href="./read-watch-main.html" className="footer__column-link" target="_self">читать и смотреть</a>
              </li>
              <li className="footer__column-links">
                <a href="./rights.html" className="footer__column-link" target="_self">права детей</a>
              </li>
              <li className="footer__column-links">
                <a href="./stories.html" className="footer__column-link" target="_self">истории</a>
              </li>
            </ul>
          </nav>
          <nav className="footer__column footer__column_content_social">
            <ul className="footer__column-list">
              <li className="footer__column-links">
                <a href="https://www.facebook.com/BigBrothers.BigSisters.Russia/" className="footer__column-link" target="_blank" rel="noreferrer">facebook</a>
              </li>
              <li className="footer__column-links">
                <a href="https://vk.com/big.brothers.big.sisters" className="footer__column-link" target="_blank" rel="noreferrer">vkontakte</a>
              </li>
              <li className="footer__column-links">
                <a href="https://www.instagram.com/nastavniki_org/" className="footer__column-link" target="_blank" rel="noreferrer">instagram</a>
              </li>
              <li className="footer__column-links">
                <a href="https://www.youtube.com/user/Nastavniki/" className="footer__column-link" target="_blank" rel="noreferrer">youtube</a>
              </li>
            </ul>
          </nav>
        </footer>

        <script src="./scripts/script.js" />
      </body>
    </CurrentUserContext.Provider>
  );
}

export default App;
