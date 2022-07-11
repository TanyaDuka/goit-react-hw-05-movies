import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './MoviesGallery.module.css';

export default function MoviesGallery({ movies }) {
  return (
    <ul className={s.Gallery}>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={s.Item}>
            <Link to={`/movies/${movie.id}`} className={s.Link}>
              <img
                className={s.Image}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500` + movie.poster_path
                    : 'https://img2.freepng.ru/20180327/spe/kisspng-movie-projector-clip-art-movie-theatre-5ab9e4b2588ce2.3154100315221321463627.jpg'
                }
                alt={movie.title}
              />
              <h3 className={s.Title}>{movie.title}</h3>
              <p className={s.Subtitle}>
                {movie.release_date ? movie.release_date : 'Unknown'}
              </p>
            </Link>
          </li>
        ))}
    </ul>
  );
}

MoviesGallery.propTypes = {
  movies: PropTypes.array,
};
