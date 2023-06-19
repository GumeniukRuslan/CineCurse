import { Button } from "components/ButtonLoadMore/ButtonLoadMore";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList"
import { STATUS } from "constants/constants";
import { getTrends } from "helpers/api"
import { useEffect, useState } from "react"

const Home = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);

  useEffect(() => {
    
    (async () => {
      try {
        if (page === 1) {
          setStatus(STATUS.PENDING)
          const data = await getTrends();
          setMovies(data.results);
          setTotalMovies(data.total_results);
          setStatus(STATUS.RESOLVED);
        }
        if (page > 1) {
            const data = await getTrends(page);
            setMovies(prevArr => [...prevArr, ...data.results]);
          }
      } catch {
        setStatus(STATUS.REJECTED)
      }
    })();
  }, [page])

  return (
    <>
      <h1>Trends</h1>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.RESOLVED && <><MovieList data={movies} /> {totalMovies > movies.length ? <Button loadMore={() => setPage(prevPage => prevPage + 1)} /> : <></>} </>}
      {status === STATUS.REJECTED && <Error/>}
    </>
  )
}

export default Home