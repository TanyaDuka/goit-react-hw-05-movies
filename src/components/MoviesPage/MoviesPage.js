import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { searchMovie } from '../../services/films-api';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (searchQuery) {
      searchMovie(searchQuery).then(({ results }) => setFilms(results));
    }
  });
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = query.trim().toLocaleLowerCase();
    if (searchQuery === '') {
      alert('Empty');
      return;
    }
    setSearchParams({ query: searchQuery });
    searchMovie(searchQuery).then(({ results }) => setFilms(results));
  };
  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };
  return (
    <>
      <form
        style={{ margin: 20 }}
        className="search-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="find"
          size="20"
          autoComplete="off"
          onChange={handleChange}
        ></input>
        <button style={{ margin: 10, cursor: 'pointer' }} type="submit">
          Search
        </button>
      </form>
      {films && (
        <ul>
          {films.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`${id}`}>{original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
