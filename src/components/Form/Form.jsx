import { StyledForm, StyledInput, SybmitButton } from "./form.styled"
import PropTypes from 'prop-types';

export const Form = ({submit, value}) => {
  return <StyledForm onSubmit={submit}>
    <StyledInput
      name="search"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search films"
      defaultValue={value}
    />
    <SybmitButton type="submit" >
      Search
    </SybmitButton>
  </StyledForm>
}

Form.propTypes = {
  submit: PropTypes.func.isRequired,
  value: PropTypes.string
} 