import { useState, useEffect, lazy, Suspense } from 'react';
import { movieById } from '../../services/films-api';
import { useParams, useNavigate, Link, Routes, Route } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  let navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    movieById(movieId).then(setMovie);
  }, [movieId]);
  if (movie) {
    const {
      poster_path,
      genres,
      original_title,
      overview,
      release_date,
      vote_average,
    } = movie;
    const picturePath = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return (
      <>
        <button className={styles.back} onClick={handleClick}>
          Go back
        </button>

        <div className={styles.filmCont}>
          <div className={styles.thumb}>
            <img
              className={styles.picture}
              src={picturePath}
              alt={original_title}
            />
          </div>
          <div>
            <h1>
              {original_title} ({release_date.split('-')[0]})
            </h1>
            <p>User Score: {vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>
              {genres.map(({ name }) => (
                <span key={name}>{name} </span>
              ))}
            </p>
          </div>
        </div>
        <div className={styles.additional}>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<h1>Loading</h1>}>
          <Routes>
            <Route path="cast" element={<Cast id={movieId} />} />
            <Route path="reviews" element={<Reviews id={movieId} />} />
          </Routes>
        </Suspense>
      </>
    );
  }
}
