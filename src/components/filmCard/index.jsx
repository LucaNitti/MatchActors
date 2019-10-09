/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
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
        first_actor,
        secondary_actor,
    } = props;
    const first_actor_role = first_actor.role
        .filter(x => x.character !== '')
        .map(x => x.character)
        .join(',');
    // const first_actor_job = first_actor.role
    //     .filter(x => x.character === '')
    //     .map(x => `${x.job} at ${x.department}`)
    //     .join(',');

    const secondary_actor_role = secondary_actor.role
        .filter(x => x.character !== '')
        .map(x => x.character)
        .join(',');
    // const secondary_actor_job = secondary_actor.role
    //     .filter(x => x.character === '')
    //     .map(x => `${x.job} at ${x.department}`)
    //     .join(',');
    return (
        <div id={id} className="">
            <div className={styles.card + ' card'}>
                <div className={styles.cardHeader + ' card-header'}>
                    <h1 className={styles.cardTitle + ' card-title'}>
                        {original_title}
                        <span className={styles.subTitle}>{title}</span>
                    </h1>
                    <img className={styles.cardImg + ' card-img'} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="Backdrop" />
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
                    <p>
                        {first_actor.name} in {first_actor_role}
                    </p>
                    <p>
                        {secondary_actor.name} in {secondary_actor_role}
                    </p>
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
    first_actor: PropTypes.object,
    secondary_actor: PropTypes.object,
};
