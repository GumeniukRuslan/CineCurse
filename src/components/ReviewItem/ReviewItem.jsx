import { AuthorAvatar, AuthorInfo, AuthorName, AuthorReview, ReviewItemStyled, Wrapper } from "./reviewItem.styled"

export const ReviewItem = ({review}) => {
  return (
    <ReviewItemStyled>
      <AuthorInfo>
        <Wrapper>
           <AuthorAvatar src={`https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`} alt={review.author} />
        </Wrapper>
        <AuthorName>{review.author}</AuthorName>
      </AuthorInfo>
      <AuthorReview>{review.content}</AuthorReview>
    </ReviewItemStyled>
  )
}