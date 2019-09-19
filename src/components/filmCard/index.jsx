/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const FilmCard = props => {
  const {
    media_type,
    poster_path,
    backdrop_path,
    popularity,
    title,
    original_language,
    release_date,
    overview,
    id,
  } = props;
  return (
    <div className="row flex-column-reverse flex-md-row">
      <div className="col-5 m-auto">
        <div className={styles.card + ' card'}>
          <div className={styles.cardHeader + ' card-header'}>
            <h1 className={styles.cardTitle + ' card-title'}>{title}</h1>
            <img
              className={styles.cardImg + ' card-img'}
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt="Backdrop"
            />
          </div>
          <div className={styles.cardBody + ' card-body'}>
            <div className={styles.container}>
              <div className="row">
                <div className={'col-4 ' + styles.metadata}>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <p>{popularity}</p>
                </div>
                <div className={'col-8 ' + styles.metadata}>
                  {original_language}
                </div>
              </div>
            </div>
            <p className={styles.cardText}>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FilmCard;

FilmCard.propTypes = {
  media_type: PropTypes.string,
  poster_path: PropTypes.string,
  popularity: PropTypes.number,
  title: PropTypes.string,
  original_language: PropTypes.string,
  release_date: PropTypes.string,
  overview: PropTypes.string,
  id: PropTypes.number,
  backdrop_path: PropTypes.string,
};
