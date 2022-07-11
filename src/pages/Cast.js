import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as moviesApi from '../services/API';

import s from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.getCastById(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={s.List}>
      {cast &&
        cast.map(element => (
          <li key={element.id} className={s.Item}>
            <img
              className={s.Image}
              src={
                element.profile_path
                  ? `https://image.tmdb.org/t/p/w500` + element.profile_path
                  : 'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'
              }
              alt={element.name}
            />
            <h2>{element.name}</h2>
          </li>
        ))}
    </ul>
  );
}
