import { MovieList } from "components/MovieList/MovieList";
import { getMovies } from "helpers/api";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export const Movies = () => {
 
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get('filter') ?? '';

  useEffect(() => {
    if(filterValue) {
      (async () => {  
        const data = await getMovies(filterValue);
        setMovies(data.results);
      })();
    }
  }, [filterValue])

  function onSubmit(evt) {
    evt.preventDefault()
    const query = evt.target.elements.search.value.trim();
    if (!query) {
      const notify = () => toast.error('Please, fill the search field.');
      return notify()
    }else if (query === filterValue) {
      const notify = () => toast('Please use another Query ;)', {icon: '😵‍💫'});;
      return notify()
    }
    const newFilter = query ? { filter: query } : {};
    setSearchParams(newFilter);
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <button type="submit" >
          <span>Search</span>
        </button>
          <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          defaultValue={filterValue}
        />
      </form>
      {movies && <MovieList data={movies}/>}
    </div>
  )
}