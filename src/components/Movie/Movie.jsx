import { Link } from "react-router-dom"
import { AditionalInfo, AditionalInfoLink, BackLinkBtn, Description, FlexContainer, MoviePoster, StyledTitle } from "./movie.styled"
import { Chip } from "components/MovieItem/movieItem.styled"
import PropTypes from 'prop-types';


export const Movie = ({movie, backLink}) => {
  return (
    <>
      <BackLinkBtn to={backLink.current}>Back</BackLinkBtn>
      <FlexContainer>
        <MoviePoster src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt={movie.title} />
        <div>
          <StyledTitle>{movie.title}</StyledTitle>
          <Description>{movie.overview}</Description>
          {movie.vote_count ? <Chip type={ movie.vote_average}>{movie.vote_average.toFixed(1)}</Chip> : <></>}
          
          <AditionalInfo>
            <AditionalInfoLink><Link style={{color: 'white', fontSize: '18px'}} to='cast'>Cast</Link></AditionalInfoLink>
            <AditionalInfoLink><Link style={{color: 'white', fontSize: '18px'}} to='reviews'>Reviews</Link></AditionalInfoLink>
          </AditionalInfo>
        </div>
      </FlexContainer>
    </>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  backLink: PropTypes.object
} 