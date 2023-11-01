import React from 'react';
import { getTrendingMovies } from './api';
import { Layout } from './Lyaout/Layout';

export const App = () => {
  return <Layout></Layout>;
};

console.log(getTrendingMovies());
