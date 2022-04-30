const numberOfFilms = +prompt('How many films yve seen?', 0);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the latest films', '');
const b = prompt('Оценка', '');
const c = prompt('One of the latest films', '');
const d = prompt('Оценка', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);