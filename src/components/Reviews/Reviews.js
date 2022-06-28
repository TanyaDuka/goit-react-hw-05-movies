import { useEffect, useState } from 'react';
import { movieReviews } from '../../services/films-api';
import propTypes from 'prop-types';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    movieReviews(id).then(({ results }) => setReviews(results));
  }, [id]);

  if (reviews.length > 0) {
    return (
      <ul>
        {reviews.map(({ author, content }) => (
          <li key={author}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>We don't have any reviews for this movie.</p>;
  }
}

Reviews.propTypes = {
  id: propTypes.string.isRequired,
};
