import { ReviewItem } from "components/ReviewItem/ReviewItem";
import { getReviews } from "helpers/api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReview] = useState(null);

  useEffect(() => {
    (async () => {  
      const data = await getReviews(movieId)
      console.log(data)
      setReview(data.results)
    })();
  }, [movieId])

  return <ul>
    {reviews && reviews.map(review => <ReviewItem key={review.id} review={review} />)}
  </ul>
  
}