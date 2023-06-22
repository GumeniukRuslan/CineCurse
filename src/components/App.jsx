import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home'))
const MovieDetails = lazy(() => import('../pages/MovieDetails'))
const Movies = lazy(() => import('../pages/Movies'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reviews = lazy(() => import('./Reviews/Reviews'))
const Trailer = lazy(() => import('./Trailer/Trailer'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="movies" element={<Movies />}/>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
            <Route path="trailer" element={<Trailer/>}/>
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-right" toastOptions={{duration: 1500, style: {border: '1px solid #713200'}}} />
    </>
      
  );
};
