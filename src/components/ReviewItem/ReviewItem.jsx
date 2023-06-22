import { DEFAULT_VALUES } from "constants/constants";
import { AuthorAvatar, AuthorInfo, AuthorName, AuthorReview, ReviewItemStyled, StyledChip, StyledDate, Wrapper } from "./reviewItem.styled"
import PropTypes from 'prop-types';

export const ReviewItem = ({ review }) => {
  const avatar = review.author_details.avatar_path
  const date = new Date(review.created_at)
  const formatedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
  return (
    <ReviewItemStyled>
      <AuthorInfo>
        <Wrapper>
           <AuthorAvatar src={avatar ? avatar.startsWith('/https://secure.gravatar.com') ? `${avatar.slice(1, avatar.length)}` : `${DEFAULT_VALUES.IMG_PATH}${avatar}` : DEFAULT_VALUES.AVATAR} alt={review.author} />
        </Wrapper>
        <div>
          {review.author_details.rating ? <p>Vote: <StyledChip type={review.author_details.rating}>{review.author_details.rating}</StyledChip></p> : <></>}
          {review.created_at ? <p>Date: <StyledDate>{formatedDate}</StyledDate></p> : <></>}
        </div>
      </AuthorInfo>
      <div>
        <AuthorName>{review.author}</AuthorName>
        <AuthorReview>{review.content}</AuthorReview>
      </div>
      
    </ReviewItemStyled>
  )
}

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
} 