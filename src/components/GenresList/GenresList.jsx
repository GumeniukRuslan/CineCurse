import PropTypes from 'prop-types';
import { GenresStyledList, GenresWrapper } from './genresList.styled';

export const GenresList = ({ data }) => {
  return (
    <GenresWrapper>
      Genres: <GenresStyledList>{data.map((genre, index) => <li key={genre.id}>{genre.name}{index !== data.length - 1 && ","}</li>) }</GenresStyledList>
    </GenresWrapper>
  )
  
}

GenresList.propTypes = {
  data: PropTypes.array.isRequired,
} 