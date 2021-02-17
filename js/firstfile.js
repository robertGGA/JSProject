"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

const watchedMovie = prompt("Один из последних просмотренных вами фильмов?", ""),
    rateMovie = prompt("Ваша оценка?", "");

personalMovieDB.movies[watchedMovie] = rateMovie;

console.log(personalMovieDB);

