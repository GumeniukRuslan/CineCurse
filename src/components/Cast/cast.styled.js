import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  position: relative;
  gap: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(220, 214, 247, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(0, 0, 0, 0.1);
`;
