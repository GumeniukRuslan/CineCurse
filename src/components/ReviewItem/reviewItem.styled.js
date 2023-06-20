import styled from 'styled-components';

export const ReviewItemStyled = styled.li`
  display: flex;
  overflow: hidden;
  justify-content: flex-start;
  box-sizing: border-box;
  gap: 15px;
  padding: 15px;
  border-radius: 10px;
  background-color: rgba(220, 214, 247, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
  gap: 10px;
`;

export const Wrapper = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border: 2px solid #6643b5;
  background-color: #6643b5;
`;

export const AuthorAvatar = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center center;
`;

export const AuthorName = styled.h2`
  font-size: 18px;
  text-align: center;
  width: 100px;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

export const AuthorReview = styled.p`
  color: white;
  font-size: 15px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  line-height: 1.4;
`;
