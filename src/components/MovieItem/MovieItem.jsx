import { Link } from "react-router-dom"
import { Chip, ComingSoon, ImageStyled, MovieItemStyled, MovieTitle } from "./movieItem.styled"
import PropTypes from 'prop-types';
import { DEFAULT_VALUES } from "constants/constants";

export const MovieItem = ({ movie, path }) => {
  
  const released = new Date() < new Date(movie.release_date)
  console.log(released)
  return (
    <MovieItemStyled>
      <Link to={`/movies/${movie.id}`} state={path}>
        <ImageStyled loading="lazy" src={movie.poster_path ? `${DEFAULT_VALUES.IMG_PATH}${movie.poster_path}` : DEFAULT_VALUES.POSTER} alt={movie.title} />
        <MovieTitle>{movie.title}</MovieTitle>
        {movie.vote_count ? <Chip type={ movie.vote_average}>{movie.vote_average.toFixed(1)}</Chip> : released ? <ComingSoon>Coming soon</ComingSoon> : <ComingSoon>Reviews missing</ComingSoon>}
      </Link>
    </MovieItemStyled>
    
  )
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  path: PropTypes.object
} 