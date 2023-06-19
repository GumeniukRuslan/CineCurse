import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Toaster } from "react-hot-toast";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home'))
const MovieDetails = lazy(() => import('../pages/MovieDetails'))
const Movies = lazy(() => import('../pages/Movies'))

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
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-right" toastOptions={{duration: 1500, style: {border: '1px solid #713200'}}} />
    </>
      
  );
};
