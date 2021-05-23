import React from 'react';
import PropTypes from 'prop-types';
import isLoggedInContext from '../contexts/IsLoggedInContext';
import BlockAbout from './BlockAbout';
import BlockCalendar from './BlockCalendar';
import BlockStory from './BlockStory';
import BlockPlace from './BlockPlace';
import BlockArticle from './BlockArticle';
import BlockMovie from './BlockMovie';
import BlockVideo from './BlockVideo';
import BlockFacebook from './BlockFacebook';
import BlockQuestion from './BlockQuestion';
import BlockLead from './BlockLead';

function Main({ mainPageData }) {
  const isLoggedIn = React.useContext(isLoggedInContext);

  return (
    <main className="main">
      <BlockLead>
        {isLoggedIn ? <BlockCalendar event={mainPageData.event} /> : <BlockAbout />}
        <BlockStory history={mainPageData.history} />
      </BlockLead>
      <BlockPlace place={mainPageData.place} />
      <BlockArticle article={mainPageData.articles && mainPageData.articles[0]} />
      <section className="main-section page__section cards-grid cards-grid_content_small-cards">
        <BlockMovie movie={mainPageData.movies && mainPageData.movies[0]} />
        <BlockMovie movie={mainPageData.movies && mainPageData.movies[1]} />
        <BlockMovie movie={mainPageData.movies && mainPageData.movies[2]} />
        <BlockMovie movie={mainPageData.movies && mainPageData.movies[3]} />
      </section>
      <BlockVideo video={mainPageData.video} />
      <section className="main-section page__section">
        <article className="card-container card-container_type_iframe">
          <BlockFacebook />
          <div className="main-questions">
            <BlockQuestion question={mainPageData.questions && mainPageData.questions[0]} />
            <BlockQuestion question={mainPageData.questions && mainPageData.questions[1]} />
            <BlockQuestion question={mainPageData.questions && mainPageData.questions[2]} />
          </div>
        </article>
      </section>
      <BlockArticle article={mainPageData.articles && mainPageData.articles[1]} />
    </main>
  );
}

Main.propTypes = {
  mainPageData: PropTypes.shape({
    event: PropTypes.shape({
      id: PropTypes.number,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          slug: PropTypes.string,
        }),
      ),
      title: PropTypes.string,
      startAt: PropTypes.string,
      endAt: PropTypes.string,
      address: PropTypes.string,
      contact: PropTypes.string,
      remainSeats: PropTypes.number,
      description: PropTypes.string,
      booked: PropTypes.bool,
    }),
    history: {
      id: PropTypes.number,
      imageUrl: PropTypes.string,
      title: PropTypes.sting,
    },
    place: {
      chosen: PropTypes.bool,
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
      info: PropTypes.string,
      description: PropTypes.string,
      imageUrl: PropTypes.string,
      link: PropTypes.string,
    },
    articles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      color: PropTypes.string,
      title: PropTypes.string,
    })),
    movies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      info: PropTypes.string,
      link: PropTypes.string,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          slug: PropTypes.string,
        }),
      ),
    })),
    video: {
      id: PropTypes.number,
      title: PropTypes.string,
      info: PropTypes.string,
      link: PropTypes.string,
      imageUrl: PropTypes.string,
      duration: PropTypes.number,
    },
    questions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          slug: PropTypes.string,
        }),
      ),
      title: PropTypes.string,
    })),
  }),
};

Main.defaultProps = {
  mainPageData: {},
};

export default Main;
