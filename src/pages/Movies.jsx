import { MovieList } from "components/MovieList/MovieList";
import { getMovies } from "helpers/api";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    if(searchQuery) {
      (async () => {  
        const data = await getMovies(searchQuery);
        setMovies(data.results);
        console.log(data.results)
      })();
    }
    
  }, [searchQuery])

  function onSubmit(evt) {
    evt.preventDefault()
    if (!evt.target.elements.search.value.trim()) {
      const notify = () => toast.error('Please, fill the search field.');
      return notify()
    } else if (evt.target.elements.search.value.trim() === searchQuery) {
      const notify = () => toast('Please use another Query ;)', {icon: '😵‍💫'});;
      return notify()
    }
    setSearchQuery(evt.target.elements.search.value.trim());
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
        />
      </form>
      {movies && <MovieList data={movies}/>}
    </div>
  )
}