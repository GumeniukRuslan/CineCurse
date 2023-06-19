import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLinkBtn = styled(Link)`
  margin: 25px 0;
  background-color: #6643b5;
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

export const FlexContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 30px;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(220, 214, 247, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(0, 0, 0, 0.1);
`;

export const MoviePoster = styled.img`
  max-width: 260px;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  width: 90%;
  margin-bottom: 20px;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

export const Description = styled.p`
  color: white;
  padding-bottom: 15px;
  font-size: 17px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

export const Test = styled.div``;

export const AditionalInfo = styled.ul`
  position: absolute;
  bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const AditionalInfoLink = styled.li`
  border: none;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.908);
  background-color: #6643b5;
  cursor: pointer;
  font-size: 12px;
  padding: 2px 10px;
  transition: background-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;

  &:hover,
  &:focus {
    background-color: #8594e4;
  }
`;
