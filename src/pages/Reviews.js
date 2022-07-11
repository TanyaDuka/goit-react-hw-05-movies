import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as moviesApi from '../services/API';

import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.getReviewsById(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id} className={s.Item}>
              <h2 className={s.Title}>Author: {review.author}</h2>
              <p className={s.Content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have reviews for this movie</p>
      )}
    </>
  );
}
