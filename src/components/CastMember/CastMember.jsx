import { DEFAULT_VALUES } from "constants/constants";
import { ActorName, ActorPhoto, ActorPosition, CastMemberStyled } from "./castMember.styled"
import PropTypes from 'prop-types';

export const CastMember = ({member}) => {
  return (
    <CastMemberStyled>
      <ActorPhoto  src={member.profile_path ? `${DEFAULT_VALUES.IMG_PATH}${member.profile_path}` : DEFAULT_VALUES.AVATAR} alt={member.name} />
      <ActorName>{member.name}</ActorName>
      <ActorPosition>{member.character}</ActorPosition>
    </CastMemberStyled>
    
  )
}

CastMember.propTypes = {
  member: PropTypes.object.isRequired
} 