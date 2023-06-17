import { Link } from "react-router-dom"

export const Movie = ({movie}) => {
  return (
    <>
      <h1>{movie.title}</h1>
      <img style={{ width: '200px' }} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <ul>
        <li><Link to='cast'>Cast</Link></li>
        <li><Link to='reviews'>Reviews</Link></li>
      </ul>
    </>
  )
}