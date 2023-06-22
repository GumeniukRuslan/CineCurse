import { Link } from "react-router-dom"
import { Chip, ImageStyled, MovieItemStyled, MovieTitle } from "./movieItem.styled"
import PropTypes from 'prop-types';
import { DEFAULT_VALUES } from "constants/constants";

export const MovieItem = ({movie, path}) => {
  return (
    <MovieItemStyled>
      <Link to={`/movies/${movie.id}`} state={path}>
        <ImageStyled src={movie.poster_path ? `${DEFAULT_VALUES.IMG_PATH}${movie.poster_path}` : DEFAULT_VALUES.POSTER} alt={movie.title} />
        <MovieTitle>{movie.title}</MovieTitle>
        {movie.vote_count ? <Chip type={ movie.vote_average}>{movie.vote_average.toFixed(1)}</Chip> : <></>}
      </Link>
    </MovieItemStyled>
    
  )
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  path: PropTypes.object
} 