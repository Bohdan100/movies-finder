import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Circles } from 'react-loader-spinner';
import { SpinerWrapper } from './App.styled';

import SharedLayout from '../components/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Reviews = lazy(() => import('../components/Reviews'));
const Cast = lazy(() => import('../components/Cast'));

export const App = () => {
  return (
    <div>
      <SharedLayout />

      <Suspense
        fallback={
          <SpinerWrapper>
            <Circles
              height="80"
              width="80"
              color="#ff6b08"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </SpinerWrapper>
        }
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} theme="colored" />
    </div>
  );
};
