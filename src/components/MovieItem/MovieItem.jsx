import { Link } from "react-router-dom"
import { Chip, ImageStyled, MovieItemStyled, MovieTitle } from "./movieItem.styled"
import PropTypes from 'prop-types';

export const MovieItem = ({info, path}) => {
  return (
    <MovieItemStyled>
      <Link to={`/movies/${info.id}`} state={path}>
        <ImageStyled src={`https://image.tmdb.org/t/p/original${info.poster_path}`} alt={info.title} />
        <MovieTitle>{info.title}</MovieTitle>
        <Chip type={info.vote_count ? info.vote_average : -1}>{info.vote_count ? info.vote_average.toFixed(1) : ''}</Chip>
      </Link>
    </MovieItemStyled>
    
  )
}

MovieItem.propTypes = {
  info: PropTypes.object.isRequired,
  path: PropTypes.object
} 