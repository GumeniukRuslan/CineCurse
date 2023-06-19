import styled from 'styled-components';

export const MovieItemStyled = styled.li`
  overflow: hidden;
  border-radius: 4px;
  background-color: rgba(220, 214, 247, 0.3);
  backdrop-filter: blur(10px);
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
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

export const Chip = styled.p`
  background-color: ${bcgColor};
  backdrop-filter: blur(10px);
  display: inline-block;
  padding: 8px;
  font-size: 17px;
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
