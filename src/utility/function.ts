import { RoleForActor, FilmForActorViewModel, Cast, ActorViewModel } from './class';

const normalizeFilmArray = (roleForActor: RoleForActor): FilmForActorViewModel[] => {
    let filmForActorViewModelArray: FilmForActorViewModel[] = new Array();
    let cast: Cast[] = roleForActor.cast;
    cast.forEach(c => {
        let filmForActorViewModel: FilmForActorViewModel = new FilmForActorViewModel();

        filmForActorViewModel.populate(c);
        let actorViewModel = new ActorViewModel();
        actorViewModel.populateFromCast(c);
        actorViewModel.name = roleForActor.name;
        filmForActorViewModel.actor.push(actorViewModel);
        filmForActorViewModelArray.push(filmForActorViewModel);
    });
    return filmForActorViewModelArray;
};

export const mergeFilm = (filmFromActor1: RoleForActor, filmFromActor2: RoleForActor) => {
    console.log({ filmFromActor1 });
    let filmsForFirstActor: FilmForActorViewModel[] = normalizeFilmArray(filmFromActor1);
    let filmsForSecondActor: FilmForActorViewModel[] = normalizeFilmArray(filmFromActor2);
    let filmsInCommon: FilmForActorViewModel[] = new Array();
    console.log({ filmsForFirstActor });
    filmsForFirstActor.forEach(film => {
        let filmForSecondActor = filmsForSecondActor.find(f => f.id === film.id);
        if (filmForSecondActor) {
            film.secondary_actor = filmForSecondActor.actor;
            filmsInCommon.push(film);
        }
    });
    console.log(filmsInCommon);
    return filmsInCommon;
};
