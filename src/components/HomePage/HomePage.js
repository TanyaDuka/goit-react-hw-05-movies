import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { trendMovies } from '../../services/films-api';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    trendMovies().then(({ results }) => setFilms(results));
  }, []);

  return (
    <>
      {films && (
        <ul>
          {films.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
