import { useEffect, useState } from 'react';
import { movieCredits } from '../../services/films-api';
import propTypes from 'prop-types';

export default function Cast({ id }) {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    movieCredits(id).then(({ cast }) => setCast(cast));
  }, [id]);

  if (cast.length > 0) {
    return (
      <ul>
        {cast.map(({ character, name, profile_path }) => (
          <li key={name}>
            <div>
              <img
                style={{ width: 100 }}
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
            </div>
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>We don't have any cast for this movie.</p>;
  }
}

Cast.propTypes = {
  id: propTypes.string.isRequired,
};
