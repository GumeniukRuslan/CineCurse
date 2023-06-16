import { Loader } from "components/Loader/Loader";
import { getOneMovie } from "helpers/api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null)

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
      
      <h1>{movie.title}</h1>
      <img style={{ width: '200px' }} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
    </div>}
    </>
    
  )
}