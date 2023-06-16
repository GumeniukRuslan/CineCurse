import { MovieList } from "components/MovieList/MovieList"
import { getTrends } from "helpers/api"
import { useEffect, useState } from "react"

export const Home = () => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    (async () => {  
      const films = await getTrends();
      setFilms(films);
    })();
  }, [])

  return (
    <>
      <h1>Trends</h1>
      <MovieList data={films}/>
    </>
  )
}