import { DEFAULT_VALUES } from 'constants/constants';
import styled from 'styled-components';

export const MovieItemStyled = styled.li`
  overflow: hidden;
  border-radius: 4px;
  background-color: rgba(220, 214, 247, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
  width: 90%;
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 380px) {
    width: calc((100% - 2 * 20px) / 2);
  }

  @media screen and (min-width: 460px) {
    width: calc((100% - 3 * 20px) / 3);
  }
  @media screen and (min-width: 910px) {
    width: calc((100% - 5 * 20px) / 5);
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  display: block;

  @media screen and (min-width: 380px) {
    /* width: calc((100% - 2 * 20px) / 2); */
  }

  @media screen and (min-width: 460px) {
    /* width: calc((100% - 3 * 20px) / 3); */
  }
  @media screen and (min-width: 1250px) {
    height: ${posterHeigth};
  }
`;

export const MovieTitle = styled.h2`
  font-size: 18px;
  text-align: center;
  padding: 10px;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  @media screen and (min-width: 380px) {
    font-size: 12px;
  }
  @media screen and (min-width: 460px) {
    font-size: 14px;
  }
  @media screen and (min-width: 910px) {
    font-size: 16px;
  }
`;

export const Chip = styled.p`
  background-color: ${bcgColor};
  backdrop-filter: blur(10px);
  display: inline-block;
  padding: 6px;
  font-size: 15px;
  border-radius: 40%;
  position: absolute;
  top: 15px;
  right: 15px;
`;

function bcgColor(props) {
  if (props.type < 0) {
    return null;
  } else if (props.type > 0 && props.type < 5) {
    return 'rgba(159, 30, 73, 0.5)';
  } else if (props.type > 5 && props.type < 8) {
    return 'rgba(204,204,0, 0.5)';
  } else {
    return 'rgba(34, 139, 34, 0.5)';
  }
}
function posterHeigth(props) {
  if (props.src === DEFAULT_VALUES.POSTER) {
    return '345px';
  } else {
    return 'auto';
  }
}
