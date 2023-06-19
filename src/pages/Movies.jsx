import { MovieList } from "components/MovieList/MovieList";
import { getMovies } from "helpers/api";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { STATUS } from "constants/constants";
import { Loader } from "components/Loader/Loader";
import { Error } from "components/Error/Error";
import { Message } from "components/Message/Message";
import { Button } from "components/ButtonLoadMore/ButtonLoadMore";
import { Form } from "components/Form/Form";

export const Movies = () => {
 
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (filterValue) {
      (async () => {
        try {
          if (page === 1) {
            setStatus(STATUS.PENDING)
            const data = await getMovies(filterValue);
            setMovies(data.results);
            setTotalMovies(data.total_results);
            setStatus(STATUS.RESOLVED);
          }
          if (page > 1) {
              const data = await getMovies(filterValue, page);
              setMovies(prevArr => [...prevArr, ...data.results]);
            }
        } catch {
          setStatus(STATUS.REJECTED)
        }
      })();
    } 
  }, [filterValue, page])

  function onSubmit(evt) {
    evt.preventDefault()
    const query = evt.target.elements.search.value.trim();
    if (!query) {
      setSearchParams({});
      const notify = () => toast.error('Please, fill the search field.');
      return notify()
    }else if (query === filterValue) {
      const notify = () => toast('Please use another Query ;)', {icon: '😵‍💫'});;
      return notify()
    }
    setPage(1)
    const newFilter = { filter: query };
    setSearchParams(newFilter);
  }
  
  return (
    <>
      <Form submit={onSubmit} value={filterValue} />
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.RESOLVED
        ? (movies.length ? (<><MovieList data={movies} /> {totalMovies > movies.length ? <Button loadMore={() => setPage(prevPage => prevPage + 1)}/>: <></>}</>) : <Message text="The true explorers of our time are not discouraged by failure. Try another query." />)
        : <></>}
      {status === STATUS.REJECTED && <Error/>}
    </>
  )
}