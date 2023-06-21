import { Link } from "react-router-dom"
import { Chip, ImageStyled, MovieItemStyled, MovieTitle } from "./movieItem.styled"
import PropTypes from 'prop-types';

export const MovieItem = ({movie, path}) => {
  return (
    <MovieItemStyled>
      <Link to={`/movies/${movie.id}`} state={path}>
        <ImageStyled src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt={movie.title} />
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