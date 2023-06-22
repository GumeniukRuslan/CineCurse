import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { Message } from "components/Message/Message";
import { STATUS } from "constants/constants";
import { getTrailer } from "helpers/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledTrailer, TrailerWrapper } from "./trailer.styled";

const Trailer = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    setStatus(STATUS.PENDING)
    try {
      (async () => {  
        const data = await getTrailer(movieId)
        const trailer = data.results.find(({ name }) => name.toLowerCase().includes('official trailer'));
        setTrailer(trailer);
        setStatus(STATUS.RESOLVED)
      })();
    } catch {
      setStatus(STATUS.REJECTED)
    }
  }, [movieId])

  return (
    <>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.RESOLVED
        ? (trailer ? <TrailerWrapper><StyledTrailer src={`https://www.youtube.com/embed/${trailer.key}`}
                        title="Official Trailer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                        allowFullScreen
                        referrerPolicy="no-referrer">
                      </StyledTrailer></TrailerWrapper> : <Message text="Let it be intrigue" />)
        : <></>}
      {status === STATUS.REJECTED && <Error/>}
    </>
  )
}

export default Trailer