import { Loader } from "components/Loader/Loader";
import { getOneMovie } from "helpers/api";
import { useEffect, useRef, useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

export const MovieDetails = () => {
  
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null)
  const location = useLocation()
  const backLinkLocation = useRef(location.state?.from ?? '/movies')

  useEffect(() => {
    (async () => {  
      const data = await getOneMovie(movieId)
      setMovie(data)
    })();
  }, [movieId])
  
  return (
    <>
      
      {!movie ? <Loader/> 
      :<div>
      <Link to={backLinkLocation.current}>back</Link>
      <h1>{movie.title}</h1>
      <img style={{ width: '200px' }} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
          <p>{movie.overview}</p>
          <ul>
            <li><Link to='cast'>Cast</Link></li>
            <li><Link to='reviews'>Reviews</Link></li>
          </ul>
      <Outlet/>
    </div>}
    </>
    
  )
}