import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SybmitButton = styled.button`
  background-color: #6643b5;
  color: rgba(255, 255, 255, 0.908);
  border: none;
  border-radius: 4px;
  font-size: 17px;
  padding: 10px 13px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;

  &:hover,
  &:focus {
    background-color: #8594e4;
  }

  @media screen and (max-width: 330px) {
    font-size: 14px;
    padding: 10px 8px;
    margin-left: 5px;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;

  &:focus {
    outline: none;
    border-color: #430f58;
  }

  @media screen and (max-width: 330px) {
    width: 100px;
  }
`;
