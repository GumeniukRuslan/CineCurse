import { Link } from "react-router-dom"
import { AditionalInfo, AditionalInfoLink, BackLinkBtn, Description, FlexContainer, MoviePoster, StyledTitle, Test } from "./movie.styled"
import { Chip } from "components/MovieItem/movieItem.styled"
import PropTypes from 'prop-types';


export const Movie = ({movie, backLink}) => {
  return (
    <>
      <BackLinkBtn to={backLink.current}>Back</BackLinkBtn>
      <FlexContainer>
        <MoviePoster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        <Test>
          <StyledTitle>{movie.title}</StyledTitle>
          <Description>{movie.overview}</Description>
          {movie.vote_count ? <Chip type={movie.vote_average}>{movie.vote_count ? movie.vote_average.toFixed(1) : ''}</Chip> : <></>}
          
          <AditionalInfo>
            <AditionalInfoLink><Link style={{color: 'white', fontSize: '20px'}} to='cast'>Cast</Link></AditionalInfoLink>
            <AditionalInfoLink><Link style={{color: 'white', fontSize: '20px'}} to='reviews'>Reviews</Link></AditionalInfoLink>
          </AditionalInfo>
        </Test>
      </FlexContainer>
    </>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  backLink: PropTypes.object
} 