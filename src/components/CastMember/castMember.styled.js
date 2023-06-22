import { DEFAULT_VALUES } from 'constants/constants';
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
  width: 70%;

  @media screen and (min-width: 380px) {
    width: calc((100% - 2 * 20px) / 2);
  }
  @media screen and (min-width: 600px) {
    width: calc((100% - 3 * 20px) / 3);
  }
  @media screen and (min-width: 910px) {
    width: calc((100% - 5 * 20px) / 5);
  }
  @media screen and (min-width: 1150px) {
    width: calc((100% - 7 * 20px) / 7);
  }
`;

export const ActorPhoto = styled.img`
  width: 100%;
  display: block;
  margin-top: ${avatarHeigth};
`;

export const ActorName = styled.h2`
  font-size: 16px;
  text-align: center;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

export const ActorPosition = styled.p`
  font-size: 14px;
  text-align: center;
  padding: 10px;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

function avatarHeigth(props) {
  if (props.src === DEFAULT_VALUES.AVATAR) {
    return 'auto';
  } else {
    return '0';
  }
}
