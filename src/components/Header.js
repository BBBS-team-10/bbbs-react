import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, NavLink } from 'react-router-dom';

function Header({ headerClasses, handleMenuButton }) {
  const history = useHistory();

  function handleProfileButton() {
    history.push('/profile');
  }
  return (
    <header className={`header page__section ${headerClasses.headerOuted} ${headerClasses.header}`}>
      <nav className="menu">
        <NavLink to="/" className="menu__logo" onClick={handleMenuButton}>
          наставники.про
        </NavLink>
        <div className={`menu__lists-wrap ${headerClasses.menuListSWrap}`}>
          <ul className="menu__list">
            <li className="menu__list-item">
              <NavLink to="/calendar" className="menu__link" onClick={handleMenuButton}>
                Календарь
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink to="/place" className="menu__link" onClick={handleMenuButton}>
                Куда пойти
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink to="/questions" className="menu__link" onClick={handleMenuButton}>
                Вопросы
              </NavLink>
            </li>
            <li className="menu__list-item menu__dropdown-item">
              <NavLink to="/read-watch-main" className="menu__link" onClick={handleMenuButton}>
                Читать и смотреть
              </NavLink>
              <ul className="menu__dropdown-list">
                <li className="menu__dropdown-list-item">
                  <NavLink
                    to="/catalog"
                    className="link menu__dropdown-link"
                    onClick={handleMenuButton}
                  >
                    Справочник
                  </NavLink>
                </li>
                <li className="menu__dropdown-list-item">
                  <NavLink
                    to="/video"
                    className="link menu__dropdown-link"
                    onClick={handleMenuButton}
                  >
                    Видео
                  </NavLink>
                </li>
                <li className="menu__dropdown-list-item">
                  <NavLink
                    to="/articles"
                    className="link menu__dropdown-link"
                    onClick={handleMenuButton}
                  >
                    Статьи
                  </NavLink>
                </li>
                <li className="menu__dropdown-list-item">
                  <NavLink
                    to="/films"
                    className="link menu__dropdown-link"
                    onClick={handleMenuButton}
                  >
                    Фильмы
                  </NavLink>
                </li>
                <li className="menu__dropdown-list-item">
                  <NavLink
                    to="/books"
                    className="link menu__dropdown-link"
                    onClick={handleMenuButton}
                  >
                    Книги
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="menu__list-item">
              <NavLink to="/rights" className="menu__link" onClick={handleMenuButton}>
                Права детей
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink to="/stories" className="menu__link" onClick={handleMenuButton}>
                Истории
              </NavLink>
            </li>
          </ul>
          <ul className={`menu__list menu__list_type_social ${headerClasses.menuListSocial}`}>
            <li className="menu__list-item">
              <NavLink
                to="https://www.facebook.com/BigBrothers.BigSisters.Russia/"
                className="menu__link"
                target="_blank"
                rel="noreferrer"
                onClick={handleMenuButton}
              >
                facebook
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink
                to="https://vk.com/big.brothers.big.sisters"
                className="menu__link"
                target="_blank"
                rel="noreferrer"
                onClick={handleMenuButton}
              >
                vkontakte
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink
                to="https://www.instagram.com/nastavniki_org/"
                className="menu__link"
                target="_blank"
                rel="noreferrer"
                onClick={handleMenuButton}
              >
                instagram
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink
                to="https://www.youtube.com/user/Nastavniki/"
                className="menu__link"
                target="_blank"
                rel="noreferrer"
                onClick={handleMenuButton}
              >
                youtube
              </NavLink>
            </li>
          </ul>
        </div>
        <button
          className={`menu__burger ${headerClasses.menuBurger}`}
          type="button"
          onClick={handleMenuButton}
        >
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
                  // value=""
                  className="search__input paragraph"
                />
                <ul className="search__option-list">
                  <li className="search__option-item">
                    <NavLink
                      to="/article"
                      className="search__title-link section-title section-title_clickable"
                      onClick={handleMenuButton}
                    >
                      Причины подростковой агрессии
                    </NavLink>
                    <NavLink to="/article" className="link search__link" onClick={handleMenuButton}>
                      статьи
                    </NavLink>
                  </li>
                  <li className="search__option-item">
                    <NavLink
                      to="/video"
                      className="search__title-link section-title section-title_clickable"
                      onClick={handleMenuButton}
                    >
                      Агрессивное поведение детей-сирот
                    </NavLink>
                    <NavLink to="/video" className="link search__link" onClick={handleMenuButton}>
                      видео
                    </NavLink>
                  </li>
                  <li className="search__option-item">
                    <NavLink
                      to="/questions"
                      className="search__title-link section-title section-title_clickable"
                      onClick={handleMenuButton}
                    >
                      Что делать если ваш младший агрессивно себя ведет, решил закрыть пару?
                    </NavLink>
                    <NavLink
                      to="/questions"
                      className="link search__link"
                      onClick={handleMenuButton}
                    >
                      вопросы
                    </NavLink>
                  </li>
                  <li className="search__option-item">
                    <NavLink
                      to="/books"
                      className="search__title-link section-title section-title_clickable"
                      onClick={handleMenuButton}
                    >
                      Как реагировать на агрессивное поведения ребенка
                    </NavLink>
                    <NavLink to="/books" className="link search__link" onClick={handleMenuButton}>
                      книги
                    </NavLink>
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
              onClick={(handleProfileButton, handleMenuButton)}
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
