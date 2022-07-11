import { Link, Outlet, useLocation } from 'react-router-dom';
import { BsArrowLeftSquare } from 'react-icons/bs';
import PropTypes from 'prop-types';

import s from './GalleryItem.module.css';

export default function GalleryItem({ movie }) {
  const location = useLocation();
  const goBackURL = location?.state?.from ?? '/';

  return (
    <>
      <div className={s.arrowLinkBox}>
        <BsArrowLeftSquare className={s.arrowLink} />
        <Link to={goBackURL}> Go back</Link>
      </div>
      {movie && (
        <div className={s.Container}>
          <img
            className={s.Image}
            src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
            alt={movie.title}
          />
          <div className={s.Card}>
            <h1 className={s.Title}>{movie.title}</h1>
            <p className={s.Description}>
              User Score: {movie.vote_average * 10}%
            </p>
            <h2 className={s.Subitle}>Overview</h2>
            <p className={s.Overview}>{movie.overview}</p>
            <h3>Genres</h3>
            <p className={s.Description}>
              {movie.genres.map(genre => genre.name).join(' ')}
            </p>
          </div>
        </div>
      )}
      <hr />
      <h4>Additional information</h4>
      <Link to="cast" className={s.Link}>
        Cast
      </Link>
      <Link to="reviews" className={s.Link}>
        Reviews
      </Link>
      <hr />
      <Outlet />
    </>
  );
}

GalleryItem.propTypes = {
  movie: PropTypes.object,
};
