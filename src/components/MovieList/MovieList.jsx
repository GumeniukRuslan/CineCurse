import { MovieItem } from "components/MovieItem/MovieItem"
import { useLocation } from "react-router-dom"
import { MovieListStyled } from "./movieList.styled"

export const MovieList = ({ data }) => {
  const location = useLocation()

  return (
    <>
      <MovieListStyled>
        {data.map(movie => <MovieItem path={{from: location}} key={movie.id} info={movie} />)}
      </MovieListStyled>
    </>
  )
  
}