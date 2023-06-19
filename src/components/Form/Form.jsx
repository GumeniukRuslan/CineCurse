import { StyledForm, StyledInput, SybmitButton } from "./form.styled"

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