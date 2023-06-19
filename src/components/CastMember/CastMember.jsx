import { ActorName, ActorPhoto, ActorPosition, CastMemberStyled } from "./castMember.styled"
import PropTypes from 'prop-types';

export const CastMember = ({member}) => {
  return (
    <CastMemberStyled>
      <ActorPhoto  src={`https://image.tmdb.org/t/p/original${member.profile_path}`} alt={member.name} />
      <ActorName>{member.name}</ActorName>
      <ActorPosition>{member.character}</ActorPosition>
    </CastMemberStyled>
    
  )
}

CastMember.propTypes = {
  member: PropTypes.object.isRequired
} 