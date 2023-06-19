import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLinkBtn = styled(Link)`
  margin-top: 25px;
  background-color: #430f58;
  border: none;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.908);
  cursor: pointer;
  font-size: 16px;
  padding: 5px 20px;
  transition: background-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;

  &:hover,
  &:focus {
    background-color: #8594e4;
  }
`;
