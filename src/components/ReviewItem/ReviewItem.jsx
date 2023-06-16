
export const ReviewItem = ({review}) => {
  return (
    <li>
      <img style={{width:'200px'}} src={`https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`} alt={review.author} />
      <h2>{review.author}</h2>
      <p>{review.content}</p>
    </li>
    
  )
}