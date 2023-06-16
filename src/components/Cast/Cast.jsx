import { CastMember } from "components/CastMember/CastMember"
import { getCast } from "helpers/api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    (async () => {  
      const data = await getCast(movieId)
      console.log(data)
      setCast(data.cast)
    })();
  }, [movieId])

  return <ul>
    {cast && cast.map(member => <CastMember key={member.id} member={member} />)}
  </ul>
  
}