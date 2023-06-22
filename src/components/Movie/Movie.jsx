
import { AditionalInfo, AditionalInfoLink, BackLinkBtn, Description, FlexContainer, MoviePoster, PosterWrapper, ReleaseDate, StyledNavLink, StyledTitle } from "./movie.styled"
import { Chip, ComingSoon } from "components/MovieItem/movieItem.styled"
import PropTypes from 'prop-types';
import { DEFAULT_VALUES } from "constants/constants";
import { StyledDate } from "components/ReviewItem/reviewItem.styled";


export const Movie = ({ movie, backLink }) => {

  const releaseDate = new Date(movie.release_date)
  const formatedDate = `${String(releaseDate.getDay()).padStart(2,"0")}.${String(releaseDate.getMonth()).padStart(2,"0")}.${releaseDate.getFullYear()}`;
  const released = new Date() < new Date(movie.release_date)

  return (
    <>
      <BackLinkBtn to={backLink.current}>Back</BackLinkBtn>
      <FlexContainer>
        <PosterWrapper>
          <MoviePoster src={movie.poster_path ? `${DEFAULT_VALUES.IMG_PATH}${movie.poster_path}` : DEFAULT_VALUES.POSTER} alt={movie.title} />
          {movie.release_date ? <ReleaseDate>Release date: <StyledDate>{formatedDate}</StyledDate></ReleaseDate> : <></>}
        </PosterWrapper>
        
        <div>
          <StyledTitle>{movie.title}</StyledTitle>
          <Description>{movie.overview ? movie.overview : DEFAULT_VALUES.DESCRIPTION}</Description>
          {movie.vote_count ? <Chip type={ movie.vote_average}>{movie.vote_average.toFixed(1)}</Chip> : released ? <ComingSoon>Coming soon</ComingSoon> : <ComingSoon>Reviews missing</ComingSoon>}
          
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