import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { NotFound } from './NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
