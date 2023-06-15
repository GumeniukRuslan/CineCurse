import { MovieItem } from "components/MovieItem/MovieItem"

export const MovieList = ({ data }) => {
  return <ul>
    {data.map(film => <MovieItem key={film.id} info={film} />)}
  </ul>
  
}