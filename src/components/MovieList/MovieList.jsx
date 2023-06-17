import { MovieItem } from "components/MovieItem/MovieItem"
import { useLocation } from "react-router-dom"

export const MovieList = ({ data }) => {
  const location = useLocation()

  return <ul>
    {data.map(film => <MovieItem path={{from: location}} key={film.id} info={film} />)}
  </ul>
  
}