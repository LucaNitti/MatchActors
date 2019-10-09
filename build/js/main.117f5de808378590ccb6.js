(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        17(a, t, e) {
            a.exports = { footer: 'footer___vNb3J', main: 'main___3bT5J', footerImg: 'footerImg___Y_vmP', btnPrimary: 'btnPrimary___vsWsE' };
        },
        32(a, t, e) {
            Object.defineProperty(t, '__esModule', { value: !0 });
            const r = e(61);
            const o = function(a) {
                const t = new Array();
                return (
                    a.cast.forEach(function(e) {
                        const o = new r.FilmForActorViewModel();
                        o.populate(e);
                        const i = new r.ActorViewModel();
                        i.populateFromCast(e), (i.name = a.name), o.actor.push(i), t.push(o);
                    }),
                    t
                );
            };
            t.mergeFilm = function(a, t) {
                console.log({ filmFromActor1: a });
                const e = o(a);
                const r = o(t);
                const i = new Array();
                return (
                    console.log({ filmsForFirstActor: e }),
                    e.forEach(function(a) {
                        const t = r.find(function(t) {
                            return t.id === a.id;
                        });
                        t && ((a.secondary_actor = t.actor), i.push(a));
                    }),
                    console.log(i),
                    i
                );
            };
        },
        6(a, t, e) {
            a.exports = {
                'col-md-5': 'col-md-5___IjpGm',
                colMd5: 'col-md-5___IjpGm',
                description: 'description____t2rJ',
                cardHeader: 'cardHeader___3kUH9',
                metadata: 'metadata___aMg_U',
                subTitle: 'subTitle___2_4pK',
                cardTitle: 'cardTitle___2fYch',
                cardBody: 'cardBody___31_4G',
                cardText: 'cardText___3UALG',
                card: 'card___1H-MX',
                cardImg: 'cardImg___1AURQ',
            };
        },
        61(a, t, e) {
            Object.defineProperty(t, '__esModule', { value: !0 });
            const r = function() {};
            t.Cast = r;
            const o = function() {};
            t.Crew = o;
            const i = function() {};
            t.RoleForActor = i;
            const n = (function() {
                function a() {}
                return (
                    (a.prototype.populateFromCast = function(a) {
                        (this.character = a.character), (this.job = ''), (this.department = ''), (this.name = a.name);
                    }),
                    (a.prototype.populateFromCrew = function(a) {
                        (this.character = ''), (this.job = a.job), (this.department = a.department), (this.name = a.name);
                    }),
                    a
                );
            })();
            t.ActorViewModel = n;
            const c = (function() {
                function a() {}
                return (
                    (a.prototype.populate = function(a) {
                        (this.media_type = a.media_type),
                            (this.poster_path = a.poster_path),
                            (this.backdrop_path = a.backdrop_path),
                            (this.popularity = a.popularity),
                            (this.title = a.title || a.name),
                            (this.original_language = a.original_language),
                            (this.release_date = a.release_date),
                            (this.id = a.id),
                            (this.overview = a.overview),
                            (this.actor = new Array()),
                            (this.secondary_actor = new Array()),
                            (this.original_title = a.original_title),
                            (this.name = a.name);
                    }),
                    a
                );
            })();
            t.FilmForActorViewModel = c;
        },
        62(a, t, e) {
            e.r(t);
            const r = e(1);
            const o = e.n(r);
            const i = e(0);
            const n = e(9);
            const c = e.n(n);
            const s = e(29);
            const d = e.n(s);
            const l = (e(37), e(10));
            const p = e.n(l);
            const m = e(19);
            const h = e(17);
            const _ = e.n(h);
            const u = e(32);
            const v = (e(2), e(6));
            const g = e.n(v);
            const f = o()('i', { className: 'fa fa-star', 'aria-hidden': 'true' });
            const b = a => {
                const {
                    media_type: t,
                    poster_path: e,
                    backdrop_path: r,
                    popularity: i,
                    title: n,
                    original_language: c,
                    release_date: s,
                    overview: d,
                    original_title: l,
                    id: p,
                    first_actor: m,
                    secondary_actor: h,
                } = a;
                const _ = m.role
                    .filter(a => a.character !== '')
                    .map(a => a.character)
                    .join(',');
                const u = h.role
                    .filter(a => a.character !== '')
                    .map(a => a.character)
                    .join(',');
                return o()(
                    'div',
                    { id: p, className: '' },
                    void 0,
                    o()(
                        'div',
                        { className: g.a.card + ' card' },
                        void 0,
                        o()(
                            'div',
                            { className: g.a.cardHeader + ' card-header' },
                            void 0,
                            o()('h1', { className: g.a.cardTitle + ' card-title' }, void 0, l, o()('span', { className: g.a.subTitle }, void 0, n)),
                            o()('img', {
                                className: g.a.cardImg + ' card-img',
                                src: 'https://image.tmdb.org/t/p/w500'.concat(r),
                                alt: 'Backdrop',
                            }),
                        ),
                        o()(
                            'div',
                            { className: g.a.cardBody + ' card-body' },
                            void 0,
                            o()(
                                'div',
                                { className: g.a.container },
                                void 0,
                                o()(
                                    'div',
                                    { className: 'row' },
                                    void 0,
                                    o()('span', { className: g.a.metadata }, void 0, f, o()('p', {}, void 0, i)),
                                    o()('span', { className: g.a.metadata }, void 0, c),
                                    o()('span', { className: g.a.metadata }, void 0, s),
                                    o()('span', { className: g.a.metadata }, void 0, t),
                                ),
                            ),
                            o()('p', { className: g.a.cardText }, void 0, d),
                            o()('p', {}, void 0, m.name, ' in ', _),
                            o()('p', {}, void 0, h.name, ' in ', u),
                        ),
                    ),
                );
            };
            function y(a, t) {
                const e = Object.keys(a);
                if (Object.getOwnPropertySymbols) {
                    let r = Object.getOwnPropertySymbols(a);
                    t &&
                        (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(a, t).enumerable;
                        })),
                        e.push.apply(e, r);
                }
                return e;
            }
            function w(a) {
                for (let t = 1; t < arguments.length; t++) {
                    var e = arguments[t] != null ? arguments[t] : {};
                    t % 2
                        ? y(e, !0).forEach(function(t) {
                              d()(a, t, e[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(e))
                        : y(e).forEach(function(t) {
                              Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(e, t));
                          });
                }
                return a;
            }
            const N = '199df12205e314f03bf242844484204b';
            const O = 'https://api.themoviedb.org/3/search/person';
            const j = 'https://api.themoviedb.org/3/person/';
            const A = 'https://api.themoviedb.org/3/configuration/languages';
            const k = { iso_639_1: 'xx', english_name: 'No Language', name: 'No Language' };
            const F = { options: [], hasMore: !1, additional: { page: 1 } };
            const M = a => {
                const { status: t, data: e } = a;
                if (t !== 200) return F;
                const r = e.page !== e.total_pages && e.total_pages !== 0;
                return {
                    options: e.results.map(a => {
                        const { id: t, popularity: e, gender: r, profile_path: o, name: i } = a;
                        return {
                            value: t,
                            info: { id: t, popularity: e, gender: r, profile_path: o, name: i },
                            label: ''.concat(i, ' (').concat(a.known_for_department, ')'),
                        };
                    }),
                    hasMore: r,
                    additional: { page: e.page + 1 },
                };
            };
            const P = o()('span', {}, void 0, 'First actor');
            const C = o()('span', {}, void 0, 'Second actor');
            class I extends i.Component {
                constructor(a) {
                    super(a),
                        (this.searchActors = (a, t, e) => {
                            const { page: r } = e;
                            if (!a || a.length < 3) return F;
                            const o = ''
                                .concat(O, '?api_key=')
                                .concat(N, '&query=')
                                .concat(a, '&page=')
                                .concat(r);
                            return p.a
                                .get(o)
                                .then(M)
                                .catch(function(a) {
                                    return console.log(a), F;
                                });
                        }),
                        (this.handleSearchMovie = () => {
                            const { actor1: a, actor2: t } = this.state;
                            const e = ''
                                .concat(j)
                                .concat(a.value, '/combined_credits?api_key=')
                                .concat(N);
                            const r = ''
                                .concat(j)
                                .concat(t.value, '/combined_credits?api_key=')
                                .concat(N);
                            p.a
                                .all([p.a.get(e), p.a.get(r)])
                                .then(
                                    p.a.spread((e, r) => {
                                        const o = w({}, e.data, {}, a.info);
                                        const i = w({}, r.data, {}, t.info);
                                        const n = Object(u.mergeFilm)(o, i);
                                        const c = w({}, this.state);
                                        (c.filmsInCommon = n), this.setState(c);
                                    }),
                                )
                                .catch(function(a) {
                                    console.log(a);
                                });
                        }),
                        (this.handleActor1 = a => {
                            const t = w({}, this.state);
                            (t.actor1 = a), this.setState(t);
                        }),
                        (this.handleActor2 = a => {
                            const t = w({}, this.state);
                            (t.actor2 = a), this.setState(t);
                        }),
                        (this.state = { actor1: [], actor2: [], filmsInCommon: [], languages: [] });
                }

                componentDidMount() {
                    const a = ''.concat(A, '?api_key=').concat(N);
                    p.a
                        .get(a)
                        .then(a => {
                            const { status: t, data: e } = a;
                            if (t !== 200) return [];
                            this.setState({ languages: e });
                        })
                        .catch(function(a) {
                            console.log(a);
                        });
                }

                render() {
                    const { actor1: a, actor2: t, filmsInCommon: e } = this.state;
                    const r = e.map(a => {
                        const { actor: t, secondary_actor: e } = a;
                        const { languages: r } = this.state;
                        const i = r.find(t => t.iso_639_1 === a.original_language) || k;
                        const { name: n, english_name: c } = i;
                        const s = n === c ? n : ''.concat(n, ' (').concat(c, ')');
                        return o()(
                            b,
                            {
                                id: a.id,
                                original_title: a.original_title,
                                title: a.title,
                                poster_path: a.poster_path,
                                popularity: a.popularity,
                                original_language: s,
                                release_date: a.release_date,
                                overview: a.overview,
                                backdrop_path: a.backdrop_path,
                                media_type: a.media_type,
                                first_actor: { name: t[0].name, role: t },
                                secondary_actor: { name: e[0].name, role: e },
                            },
                            a.id,
                        );
                    });
                    return o()(
                        'div',
                        { className: 'container-fluid' },
                        void 0,
                        o()(
                            'div',
                            { className: 'main p-3 ' + _.a.main },
                            void 0,
                            o()(
                                'div',
                                { className: 'row' },
                                void 0,
                                o()(
                                    'div',
                                    { className: 'col-sm-12 col-md-6' },
                                    void 0,
                                    P,
                                    o()(m.a, {
                                        loadOptions: this.searchActors,
                                        defaultOptions: !1,
                                        value: a,
                                        onChange: this.handleActor1,
                                        additional: { page: 1 },
                                    }),
                                ),
                                o()(
                                    'div',
                                    { className: 'col-sm-12 col-md-6' },
                                    void 0,
                                    C,
                                    o()(m.a, {
                                        loadOptions: this.searchActors,
                                        defaultOptions: !1,
                                        value: t,
                                        onChange: this.handleActor2,
                                        additional: { page: 1 },
                                    }),
                                ),
                            ),
                            o()(
                                'div',
                                { className: 'row' },
                                void 0,
                                o()(
                                    'div',
                                    { className: 'col-12 mt-4 text-center' },
                                    void 0,
                                    o()(
                                        'button',
                                        { className: 'btn btn-primary ' + _.a.btnPrimary, type: 'button', onClick: this.handleSearchMovie },
                                        void 0,
                                        'Cerca film',
                                    ),
                                ),
                            ),
                            o()('div', { className: 'row d-flex justify-content-around align-self-stretch' }, void 0, r),
                        ),
                        o()(
                            'div',
                            { className: _.a.footer },
                            void 0,
                            o()('img', {
                                className: _.a.footerImg,
                                alt: 'powered by The movie DB',
                                src:
                                    'https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg',
                            }),
                        ),
                    );
                }
            }
            const T = I;
            c.a.render(o()(T, {}), document.getElementById('app'));
        },
    },
    [[62, 1, 2]],
]);
// # sourceMappingURL=main.117f5de808378590ccb6.js.map
