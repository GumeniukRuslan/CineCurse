import { Loader } from "components/Loader/Loader";
import { getOneMovie } from "helpers/api";
import { useEffect, useRef, useState } from "react"
import { Outlet, useLocation, useParams } from "react-router-dom";
import { STATUS } from "constants/constants";
import { Error } from "components/Error/Error";
import { Movie } from "components/Movie/Movie";

export const MovieDetails = () => {

  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null)
  const location = useLocation()
  const backLinkLocation = useRef(location.state?.from ?? '/movies')


  useEffect(() => {
    setStatus(STATUS.PENDING)
    try {
      (async () => {  
        const data = await getOneMovie(movieId)
        setMovie(data)
        setStatus(STATUS.RESOLVED)
      })();
    } catch {
      setStatus(STATUS.REJECTED)
    }
  }, [movieId])
  
  return (
    <>
      
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.RESOLVED && <Movie movie={movie} backLink={backLinkLocation} />}
      {status === STATUS.REJECTED && <Error />}
      <Outlet/>
    </>
  )
}