import styled from 'styled-components';

export const MovieItemStyled = styled.li`
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
  width: calc((100% - 5 * 20px) / 5);
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  display: block;
`;

export const MovieTitle = styled.h2`
  font-size: 18px;
  text-align: center;
  padding: 10px;
  color: #430f58;
`;

export const Chip = styled.p`
  background-color: ${bcgColor};
  display: inline-block;
  padding: 8px;
  font-size: 17px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 5px;
`;

function bcgColor(props) {
  if (props.type < 0) {
    return null;
  } else if (props.type > 0 && props.type < 5) {
    return '#9f1e49';
  } else if (props.type > 5 && props.type < 8) {
    return 'rgb(255 205 0 / 91%)';
  } else {
    return 'rgb(34, 139, 34)';
  }
}
