import React from 'react';
import { getTrendingMovies } from './api';

export const App = () => {
  return (
    <main>
      <div>Home</div>
      <div>Movies</div>
    </main>
  );
};

console.log(getTrendingMovies());
