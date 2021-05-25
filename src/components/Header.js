import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function Header({ headerClasses, handleMenuButton }) {
  const history = useHistory();
  function handleProfileButton() {
    history.push('/profile');
  }
  return (
    <header className={`header page__section ${headerClasses.headerOuted} ${headerClasses.header}`}>
      <nav className="menu">
        <a href="./" target="_self" className="menu__logo">
          наставники.про
        </a>
        <div className={`menu__lists-wrap ${headerClasses.menuListSWrap}`}>
          <ul className="menu__list">
            <li className="menu__list-item">
              <a href="./calendar" className="menu__link">
                Календарь
              </a>
            </li>
            <li className="menu__list-item">
              <a href="./place" className="menu__link">
                Куда пойти
              </a>
            </li>
            <li className="menu__list-item">
              <a href="./questions" className="menu__link">
                Вопросы
              </a>
            </li>
            <li className="menu__list-item menu__dropdown-item">
              <a href="./read-watch-main" className="menu__link">
                Читать и смотреть
              </a>
              <ul className="menu__dropdown-list">
                <li className="menu__dropdown-list-item">
                  <a href="./catalog" className="link menu__dropdown-link">
                    Справочник
                  </a>
                </li>
                <li className="menu__dropdown-list-item">
                  <a href="./video" className="link menu__dropdown-link">
                    Видео
                  </a>
                </li>
                <li className="menu__dropdown-list-item">
                  <a href="./articles" className="link menu__dropdown-link">
                    Статьи
                  </a>
                </li>
                <li className="menu__dropdown-list-item">
                  <a href="./films" className="link menu__dropdown-link">
                    Фильмы
                  </a>
                </li>
                <li className="menu__dropdown-list-item">
                  <a href="./books" className="link menu__dropdown-link">
                    Книги
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu__list-item">
              <a href="./rights" className="menu__link">
                Права детей
              </a>
            </li>
            <li className="menu__list-item">
              <a href="./stories" className="menu__link">
                Истории
              </a>
            </li>
          </ul>
          <ul className={`menu__list menu__list_type_social ${headerClasses.menuListSocial}`}>
            <li className="menu__list-item">
              <a
                href="https://www.facebook.com/BigBrothers.BigSisters.Russia/"
                className="menu__link"
                target="_blank"
                rel="noreferrer"
              >
                facebook
              </a>
            </li>
            <li className="menu__list-item">
              <a
                href="https://vk.com/big.brothers.big.sisters"
                className="menu__link"
                target="_blank"
                rel="noreferrer"
              >
                vkontakte
              </a>
            </li>
            <li className="menu__list-item">
              <a
                href="https://www.instagram.com/nastavniki_org/"
                className="menu__link"
                target="_blank"
                rel="noreferrer"
              >
                instagram
              </a>
            </li>
            <li className="menu__list-item">
              <a
                href="https://www.youtube.com/user/Nastavniki/"
                className="menu__link"
                target="_blank"
                rel="noreferrer"
              >
                youtube
              </a>
            </li>
          </ul>
        </div>
        <button className={`menu__burger ${headerClasses.menuBurger}`} type="button" onClick={handleMenuButton}>
          <span className="menu__burger-line" />
          <span className="menu__burger-line" />
          <span className="menu__burger-line" />
        </button>
        <ul className="menu__button-list">
          <li className="menu__button-item">
            <form className="search" name="search-form">
              <button
                className="menu__button menu__button_type_search search__button"
                type="submit"
                aria-label="Поиск"
                title="Поиск"
              />
              <div className="search__options menu__search-options">
                <input
                  type="text"
                  name="search"
                  placeholder="Поиск"
                  value=""
                  className="search__input paragraph"
                />
                <ul className="search__option-list">
                  <li className="search__option-item">
                    <a
                      href="./article.html"
                      className="search__title-link section-title section-title_clickable"
                    >
                      Причины подростковой агрессии
                    </a>
                    <a href="./article.html" className="link search__link">
                      статьи
                    </a>
                  </li>
                  <li className="search__option-item">
                    <a
                      href="./video.html"
                      className="search__title-link section-title section-title_clickable"
                    >
                      Агрессивное поведение детей-сирот
                    </a>
                    <a href="./video.html" className="link search__link">
                      видео
                    </a>
                  </li>
                  <li className="search__option-item">
                    <a
                      href="./questions.html"
                      className="search__title-link section-title section-title_clickable"
                    >
                      Что делать если ваш младший агрессивно себя ведет, решил закрыть пару?
                    </a>
                    <a href="./questions.html" className="link search__link">
                      вопросы
                    </a>
                  </li>
                  <li className="search__option-item">
                    <a
                      href="./books.html"
                      className="search__title-link section-title section-title_clickable"
                    >
                      Как реагировать на агрессивное поведения ребенка
                    </a>
                    <a href="./books.html" className="link search__link">
                      книги
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </li>
          <li className="menu__button-item">
            <button
              className="menu__button menu__button_type_user"
              type="button"
              aria-label="Личный кабинет"
              title="Личный кабинет"
              onClick={handleProfileButton}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  headerClasses: PropTypes.shape({
    header: PropTypes.string,
    menuBurger: PropTypes.string,
    menuListSWrap: PropTypes.string,
    menuListSocial: PropTypes.string,
    headerOuted: PropTypes.string,
  }),
  handleMenuButton: PropTypes.func,
};

Header.defaultProps = {
  headerClasses: {
    header: '',
    menuBurger: '',
    menuListSWrap: 'menu__lists-wrap_hidden',
    menuListSocial: 'menu__list_hidden',
    headerOuted: '',
  },
  handleMenuButton: () => {},
};

export default Header;