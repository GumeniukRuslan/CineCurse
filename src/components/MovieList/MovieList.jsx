import { MovieItem } from "components/MovieItem/MovieItem"
import { useLocation } from "react-router-dom"

export const MovieList = ({ data }) => {
  const location = useLocation()

  return (
    <>
      <ul>
        {data.map(movie => <MovieItem path={{from: location}} key={movie.id} info={movie} />)}
      </ul>
    </>
  )
  
}