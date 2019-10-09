/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import AsyncPaginate from 'react-select-async-paginate';
import styles from './style/style.scss';
import { mergeFilm } from './utility/function';
import FilmCard from './components/filmCard';

const apiKey = '199df12205e314f03bf242844484204b';
const searchPersonUrl = 'https://api.themoviedb.org/3/search/person';
const personUrl = 'https://api.themoviedb.org/3/person/';
const languagesUrl = 'https://api.themoviedb.org/3/configuration/languages';

const defaultLanguage = {
    iso_639_1: 'xx',
    english_name: 'No Language',
    name: 'No Language',
};

const defaultReturn = {
    options: [],
    hasMore: false,
    additional: {
        page: 1,
    },
};

const formatResponse = response => {
    const { status, data } = response;
    if (status !== 200) return defaultReturn;
    const hasMore = data.page !== data.total_pages && data.total_pages !== 0;
    const options = data.results.map(actor => {
        const { id, popularity, gender, profile_path, name } = actor;
        return {
            value: id,
            info: { id, popularity, gender, profile_path, name },
            label: `${name} (${actor.known_for_department})`,
        };
    });
    return {
        options,
        hasMore,
        additional: {
            page: data.page + 1,
        },
    };
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actor1: [],
            actor2: [],
            filmsInCommon: [],
            languages: [],
        };
    }

    componentDidMount() {
        const url = `${languagesUrl}?api_key=${apiKey}`;
        axios
            .get(url)
            .then(response => {
                const { status, data } = response;
                if (status !== 200) return [];
                this.setState({ languages: data });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    searchActors = (inputValue, loadedOptions, { page }) => {
        if (!inputValue || inputValue.length < 3) return defaultReturn;
        const url = `${searchPersonUrl}?api_key=${apiKey}&query=${inputValue}&page=${page}`;
        return axios
            .get(url)
            .then(formatResponse)
            .catch(function(error) {
                console.log(error);
                return defaultReturn;
            });
    };

    handleSearchMovie = () => {
        const { actor1, actor2 } = this.state;
        const urlActor1 = `${personUrl}${actor1.value}/combined_credits?api_key=${apiKey}`;
        const urlActor2 = `${personUrl}${actor2.value}/combined_credits?api_key=${apiKey}`;
        axios
            .all([axios.get(urlActor1), axios.get(urlActor2)])
            .then(
                axios.spread((actor1Response, actor2Response) => {
                    const actor1ResponseData = { ...actor1Response.data, ...actor1.info };
                    const actor2ResponseData = { ...actor2Response.data, ...actor2.info };
                    const filmsInCommon = mergeFilm(actor1ResponseData, actor2ResponseData);
                    const tmpState = { ...this.state };
                    tmpState.filmsInCommon = filmsInCommon;
                    this.setState(tmpState);
                }),
            )
            .catch(function(error) {
                console.log(error);
            });
    };

    handleActor1 = value => {
        const tmpState = { ...this.state };
        tmpState.actor1 = value;
        this.setState(tmpState);
    };

    handleActor2 = value => {
        const tmpState = { ...this.state };
        tmpState.actor2 = value;
        this.setState(tmpState);
    };

    render() {
        const { actor1, actor2, filmsInCommon } = this.state;
        const listFilm = filmsInCommon.map(x => {
            const { actor, secondary_actor } = x;

            const { languages } = this.state;
            const languageObject = languages.find(l => l.iso_639_1 === x.original_language) || defaultLanguage;
            const { name, english_name } = languageObject;
            const language = name === english_name ? name : `${name} (${english_name})`;
            return (
                <FilmCard
                    key={x.id}
                    id={x.id}
                    original_title={x.original_title}
                    title={x.title}
                    poster_path={x.poster_path}
                    popularity={x.popularity}
                    original_language={language}
                    release_date={x.release_date}
                    overview={x.overview}
                    backdrop_path={x.backdrop_path}
                    media_type={x.media_type}
                    first_actor={{ name: actor[0].name, role: actor }}
                    secondary_actor={{ name: secondary_actor[0].name, role: secondary_actor }}
                />
            );
        });
        return (
            <div className="container-fluid">
                <div className={'main p-3 ' + styles.main}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <span>First actor</span>
                            <AsyncPaginate
                                loadOptions={this.searchActors}
                                defaultOptions={false}
                                value={actor1}
                                onChange={this.handleActor1}
                                additional={{
                                    page: 1,
                                }}
                            />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <span>Second actor</span>
                            <AsyncPaginate
                                loadOptions={this.searchActors}
                                defaultOptions={false}
                                value={actor2}
                                onChange={this.handleActor2}
                                additional={{
                                    page: 1,
                                }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-4 text-center">
                            <button className={'btn btn-primary ' + styles.btnPrimary} type="button" onClick={this.handleSearchMovie}>
                                Cerca film
                            </button>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-around align-self-stretch">{listFilm}</div>
                </div>
                <div className={styles.footer}>
                    <img
                        className={styles.footerImg}
                        alt="powered by The movie DB"
                        src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg"
                    ></img>
                </div>
            </div>
        );
    }
}

export default hot(App);
