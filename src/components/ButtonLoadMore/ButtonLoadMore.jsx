import { LoadMore } from "./buttonLoadMore.styled"
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
  return (
    <LoadMore onClick={loadMore}>Load more</LoadMore>
  )
}


Button.propTypes = {
  loadMore: PropTypes.func.isRequired
} 