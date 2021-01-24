import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movies({year, title, summary, poster, genres}) {
    return (
        //img에서 alt와 title을 사용한 이유는 마우스를 올렸을때 영화제목을 나타내기 위해서이다.
    <div className="movie"> 
        <img src={poster} alt={title} title={title} /> 
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genres, index) => (
                    <li key={index} className="genres__genre">{genres}</li>
                ))}
        </ul>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>
    );
} //App.js에서 Movies 라는 component를 생성하면 사용 가능하다.

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
} //위의 Movies함수의 props들을 정의한 것들이다.

export default Movies;
