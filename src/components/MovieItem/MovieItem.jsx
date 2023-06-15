import { Link } from "react-router-dom"

export const MovieItem = ({info}) => {
  return (
    <li>
      <Link to={`/movies/${info.id}`}>
        <img style={{width:'200px'}} src={`https://image.tmdb.org/t/p/original${info.poster_path}`} alt={info.original_title} />
        <h2>{info.original_title}</h2>
      </Link>
    </li>
    
  )
}