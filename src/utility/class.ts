import { isThisMinute } from 'date-fns';

export interface FilmInterface {
  media_type: string;
  poster_path?: string;
  backdrop_path?: string;
  popularity: number;
  title?: string;
  name?: string;
  original_language: string;
  release_date: string;
  overview: string;
  id: number;
}
export class Cast implements FilmInterface {
  media_type: string;
  adult: boolean;
  backdrop_path?: string;
  character: string;
  credit_id: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  constructor() {}
}
export class Crew implements FilmInterface {
  media_type: string;
  adult: string;
  backdrop_path: string;
  credit_id: string;
  department: string;
  genre_ids: number[];
  id: number;
  job: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  constructor() {}
}

export class RoleForActor {
  cast: Cast[];
  crew: Crew[];
  id: number;
  popularity: number;
  gender: number;
  profile_path: string;
  constructor() {}
}

export class ActorViewModel {
  character: string;
  job: string;
  department: string;
  constructor() {}
  populateFromCast(cast: Cast) {
    this.character = cast.character;
    this.job = '';
    this.department = '';
  }
  populateFromCrew(crew: Crew) {
    this.character = '';
    this.job = crew.job;
    this.department = crew.department;
  }
}
export class FilmForActorViewModel implements FilmInterface {
  media_type: string;
  poster_path?: string;
  backdrop_path?: string;
  popularity: number;
  title: string;
  original_language: string;
  release_date: string;
  overview: string;
  id: number;
  actor: ActorViewModel[];
  secondary_actor: ActorViewModel[];
  constructor() {}
  populate(film: FilmInterface) {
    this.media_type = film.media_type;
    this.poster_path = film.poster_path;
    this.backdrop_path = film.backdrop_path;
    this.popularity = film.popularity;
    this.title = film.title || film.name;
    this.original_language = film.original_language;
    this.release_date = film.release_date;
    this.id = film.id;
    this.overview = film.overview;
    this.actor = new Array();
    this.secondary_actor = new Array();
  }
}
