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
    original_title,
    id,
  } = props;
  return (
    <div className="row flex-column-reverse flex-md-row">
      <div className="col-sm-12 col-md-5 mx-auto">
        <div className={styles.card + ' card'}>
          <div className={styles.cardHeader + ' card-header'}>
            <h1 className={styles.cardTitle + ' card-title'}>
              {original_title}
              <span className={styles.subTitle}>{title}</span>
            </h1>
            <img
              className={styles.cardImg + ' card-img'}
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt="Backdrop"
            />
          </div>
          <div className={styles.cardBody + ' card-body'}>
            <div className={styles.container}>
              <div className="row">
                <span className={styles.metadata}>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <p>{popularity}</p>
                </span>
                <span className={styles.metadata}>{original_language}</span>
                <span className={styles.metadata}>{release_date}</span>
                <span className={styles.metadata}>{media_type}</span>
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
  original_title: PropTypes.string,
  original_language: PropTypes.string,
  release_date: PropTypes.string,
  overview: PropTypes.string,
  id: PropTypes.number,
  backdrop_path: PropTypes.string,
};
