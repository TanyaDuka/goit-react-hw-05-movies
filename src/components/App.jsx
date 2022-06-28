import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';

const HomePage = lazy(()=> import('./HomePage'));
const MoviesPage = lazy(() => import('./MoviesPage'));
const MovieDetailsPage = lazy(()=> import('./MovieDetailsPage'));
const Nothing = lazy(()=>import('./Nothihg'));

const App = () => {
  
  return (      
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<Navigation />}>  
            <Route index element={<HomePage />} />        
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path='*' element={<Nothing />} />
        </Route>    
      </Routes>
    </Suspense>    
  );
};

export default App;