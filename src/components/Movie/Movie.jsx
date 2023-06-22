
import { AditionalInfo, AditionalInfoLink, BackLinkBtn, Description, FlexContainer, MoviePoster, StyledNavLink, StyledTitle } from "./movie.styled"
import { Chip } from "components/MovieItem/movieItem.styled"
import PropTypes from 'prop-types';
import { DEFAULT_VALUES } from "constants/constants";


export const Movie = ({movie, backLink}) => {
  return (
    <>
      <BackLinkBtn to={backLink.current}>Back</BackLinkBtn>
      <FlexContainer>
        <MoviePoster src={movie.poster_path ? `${DEFAULT_VALUES.IMG_PATH}${movie.poster_path}` : DEFAULT_VALUES.POSTER} alt={movie.title} />
        <div>
          <StyledTitle>{movie.title}</StyledTitle>
          <Description>{movie.overview ? movie.overview : DEFAULT_VALUES.DESCRIPTION}</Description>
          {movie.vote_count ? <Chip type={ movie.vote_average}>{movie.vote_average.toFixed(1)}</Chip> : <></>}
          
          <AditionalInfo>
            <AditionalInfoLink><StyledNavLink to='cast'>Cast</StyledNavLink></AditionalInfoLink>
            <AditionalInfoLink><StyledNavLink to='reviews'>Reviews</StyledNavLink></AditionalInfoLink>
            <AditionalInfoLink><StyledNavLink to='trailer'>Trailer</StyledNavLink></AditionalInfoLink>
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