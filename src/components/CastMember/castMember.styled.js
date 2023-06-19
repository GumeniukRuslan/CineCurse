import styled from 'styled-components';

export const CastMemberStyled = styled.li`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  border-radius: 4px;
  background-color: rgba(220, 214, 247, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
  width: calc((100%) / 7);
`;

export const ActorPhoto = styled.img`
  width: 100%;
  display: block;
`;

export const ActorName = styled.h2`
  font-size: 18px;
  text-align: center;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;
export const ActorPosition = styled.p`
  text-align: center;
  padding: 10px;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;
