import { DEFAULT_VALUES } from "constants/constants";
import { AuthorAvatar, AuthorInfo, AuthorName, AuthorReview, ReviewItemStyled, Wrapper } from "./reviewItem.styled"
import PropTypes from 'prop-types';

export const ReviewItem = ({ review }) => {
  const avatar = review.author_details.avatar_path
  return (
    <ReviewItemStyled>
      <AuthorInfo>
        <Wrapper>
           <AuthorAvatar src={avatar ? avatar.startsWith('/https://secure.gravatar.com') ? `${avatar.slice(1, avatar.length)}` : `${DEFAULT_VALUES.IMG_PATH}${avatar}` : DEFAULT_VALUES.AVATAR} alt={review.author} />
        </Wrapper>
        <AuthorName>{review.author}</AuthorName>
      </AuthorInfo>
      <AuthorReview>{review.content}</AuthorReview>
    </ReviewItemStyled>
  )
}

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
} 