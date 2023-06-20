import { MovieItem } from "components/MovieItem/MovieItem"
import { useLocation } from "react-router-dom"
import { MovieListStyled } from "./movieList.styled"
import PropTypes from 'prop-types';

export const MovieList = ({ data }) => {
  const location = useLocation()

  return (
    <>
      <MovieListStyled>
        {data.map(movie => <MovieItem path={{from: location}} key={movie.id} movie={movie} />)}
      </MovieListStyled>
    </>
  )
  
}

MovieList.propTypes = {
  data: PropTypes.array.isRequired,
} 