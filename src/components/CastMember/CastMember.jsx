
export const CastMember = ({member}) => {
  return (
    <li>
      <img style={{width:'200px'}} src={`https://image.tmdb.org/t/p/original${member.profile_path}`} alt={member.name} />
      <h2>{member.name}</h2>
      <p>{member.character}</p>
    </li>
    
  )
}