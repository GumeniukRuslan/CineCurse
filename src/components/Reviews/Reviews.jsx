import { ReviewItem } from "components/ReviewItem/ReviewItem";
import { getReviews } from "helpers/api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { STATUS } from "constants/constants";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { Message } from "components/Message/Message";
import { ReviewsListStyled } from "./review.styled";


const Reviews = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    setStatus(STATUS.PENDING)
    try {
      (async () => {  
        const data = await getReviews(movieId)
        setReview(data.results)
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
        ? (reviews.length ? <ReviewsListStyled>{reviews.map(review => <ReviewItem key={review.id} review={review} />)}</ReviewsListStyled> : <Message text="There are no reviews" />)
        : <></>}
      {status === STATUS.REJECTED && <Error/>}
    </>
  )
}

export default Reviews