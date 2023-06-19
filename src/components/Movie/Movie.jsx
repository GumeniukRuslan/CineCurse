import { Link } from "react-router-dom"
import { BackLinkBtn } from "./movie.styled"


export const Movie = ({movie, backLink}) => {
  return (
    <>
      <BackLinkBtn to={backLink.current}>Back</BackLinkBtn>
      <h1>{movie.title}</h1>
      <img style={{ width: '200px' }} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>{movie.vote_average.toFixed(1)}</p>
      <ul>
        <li><Link to='cast'>Cast</Link></li>
        <li><Link to='reviews'>Reviews</Link></li>
      </ul>
    </>
  )
}