import { Link } from "react-router-dom"

export const MovieItem = ({info, path}) => {
  return (
    <li>
      <Link to={`/movies/${info.id}`} state={path}>
        <img style={{width:'200px'}} src={`https://image.tmdb.org/t/p/original${info.poster_path}`} alt={info.title} />
        <h2>{info.title}</h2>
      </Link>
    </li>
    
  )
}