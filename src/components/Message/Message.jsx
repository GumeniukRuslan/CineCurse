import PropTypes from 'prop-types';
import { StyledMessage } from "./message.styled"

export const Message = ({ text }) => {
  return (
    <StyledMessage>{text}</StyledMessage>
  )
}

Message.propTypes = {
  text: PropTypes.string
} 