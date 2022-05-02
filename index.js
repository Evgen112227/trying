const personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt('How many films yve seen?', 0);

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('How many films yve seen?', 0);
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('One of the latest films', '');
            const b = prompt('Оценка', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов')
        } else if (this.count >= 10 && this.count < 30) {
            console.log('Вы классический зритель')
        } else if (this.count >= 30) {
            console.log('Вы киноман!')
        } else {
            console.log("Ошибка");
        }
    },
    showMyDB: function () {
        return this.privat === false ? console.log(this) : console.log('no rights to see');
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}?`);
            if (genre === '' || genre == null || !genre.trim()) {
                console.log('Вы ввели некорректиные данные');
                i--;
            } else {
                this.genres.push(genre);
            }
        }
        this.genres.forEach((el, i) => console.log(`Любимый жанр номер ${i + 1} - это ${el}`));
    },
    toggleVisibleMyDB: function () {
        this.privat ? this.privat = false : this.privat = true;
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();