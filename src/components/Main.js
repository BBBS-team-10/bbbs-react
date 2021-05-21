import React from 'react';
import PropTypes from 'prop-types';
import isLoggedInContext from '../contexts/IsLoggedInContext';
import BlockAbout from './BlockAbout';
import BlockCalendar from './BlockCalendar';

function Main({ mainPageData }) {
  const isLoggedIn = React.useContext(isLoggedInContext);

  return (
    <main className="main">
      {console.log(mainPageData)}
      <section className="lead page__section">
        <article className="card-container card-container_type_identical">
          {isLoggedIn ? <BlockCalendar /> : <BlockAbout />}
          <article className="card card_content_media">
            <img
              src="./images/stories/DG7B0561(1).jpg"
              alt="История Марины и Алины"
              className="card__media-img"
            />
            <a href="./stories.html" className="card__media-link section-title">
              История Марины и Алины
            </a>
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
              <img
                src="./images/where-to-go/img-xl.jpg"
                alt="Сплав на байдарках"
                className="card__img"
              />
            </a>
            <a href="#top" className="link card__link">
              перейти на сайт
            </a>
          </div>
          <div className="card card_content_annotation card_type_main">
            <div className="card__content">
              <p className="caption card__annotation-caption">Девочка, 10 лет. Активный</p>
              <div className="card__annotation card__annotation_position_main-card">
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить,
                  и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.
                  Вы будете не понимать друг друга, потом понимать чуть лучше и, Аннотация статьи в
                  несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово,
                  а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать
                  друг друга, потом понимать чуть лучше и,
                </p>
                <p className="paragraph card__paragraph">
                  Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить,
                  и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.
                  Вы будете не по Аннотация статьи в несколько абзацев. В тот момент, как ребёнок
                  научился говорить, и не одно слово, а задавать бесконечное количество вопросов,
                  жизнь меняется.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="main-section page__section">
        <article className="card card_color_blue card_content_quote">
          <a href="./articles.html" className="card__link-wrap">
            <h3 className="chapter-title card__quote">
              Развитие детей-сирот отличается от развития детей, живущих в семьях. Все этапы
              развития у детей-сирот проходят с искажениями и имеют ряд негативных особенностей.
            </h3>
          </a>
          <a href="./articles.html" className="link card__link">
            читать статью
          </a>
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
              <p className="caption card__title-caption">
                Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
              </p>
            </div>
            <a href="./films.html" className="link card__link link_action_open-video">
              смотреть трейлер
            </a>
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
              <p className="caption card__title-caption">
                Клод Баррас, мультфильм, Швейцария, Франция, 2016
              </p>
            </div>
            <a href="./films.html" className="link card__link link_action_open-video">
              смотреть трейлер
            </a>
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
            <a href="./films.html" className="link card__link link_action_open-video">
              смотреть трейлер
            </a>
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
              <p className="caption card__title-caption">
                Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
              </p>
            </div>
            <a href="./films.html" className="link card__link link_action_open-video">
              смотреть трейлер
            </a>
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
            <a href="#top" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
          <div className="card card_color_yellow card_content_video video">
            <a href="./video.html" className="card__link-wrap">
              <img
                src="./images/video/video-main.jpg"
                alt="Превью видео"
                className="video__img video__img_position_main-video"
              />
            </a>
          </div>
        </article>
      </section>
      <section className="main-section page__section">
        <article className="card-container card-container_type_iframe">
          <div className="card card_color_blue card_content_media">
            <iframe
              title="facebook-frame"
              className="card__iframe"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=630&height=630&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              scrolling="no"
              allowFullScreen="true"
              allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <div className="main-questions">
            <article className="question main-questions__item">
              <a href="./questions.html" className="main-questions__link">
                <h2 className="section-title question__title main-questions__title">
                  Я боюсь, что ребёнок ко мне слишком сильно привяжется. Что делать?
                </h2>
              </a>
              <p className="rubric question__rubric main-questions__rubric">рубрика</p>
            </article>
            <article className="question main-questions__item">
              <a href="./questions.html" className="main-questions__link">
                <h2 className="section-title question__title main-questions__title">
                  Возможно ли продлить срок участия в программе, если и я и мой «младший» хотим
                  остаться в программе?
                </h2>
              </a>
              <p className="rubric question__rubric main-questions__rubric">рубрика</p>
            </article>
            <article className="question main-questions__item">
              <a href="./questions.html" className="main-questions__link">
                <h2 className="section-title question__title main-questions__title">
                  Что делать если Ваш младший решил закрыть пару, т.к. слишком занят с учебой и
                  друзьями?
                </h2>
              </a>
              <p className="rubric question__rubric main-questions__rubric">рубрика</p>
            </article>
          </div>
        </article>
      </section>
      <section className="main-section page__section">
        <article className="card card_color_green card_content_quote">
          <a href="./articles.html" className="card__link-wrap">
            <h3 className="chapter-title card__quote">
              У таких детей возникает ощущение отверженности. Оно приводит к напряженности и
              недоверию к людям и, как итог, к реальному неприятию себя и окружающих.
            </h3>
          </a>
          <a href="./articles.html" className="link card__link">
            читать статью
          </a>
        </article>
      </section>
    </main>
  );
}

Main.propTypes = {
  mainPageData: PropTypes.shape({}),
};

Main.defaultProps = {
  mainPageData: {},
};

export default Main;
