const TeamMembers = ({ teamMembers, gridSize }) => {
    const gridClass = `team-grid grid-${gridSize}`;
  
    return (
      <div className={gridClass}>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.picture} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <a href={member.website} target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        ))}
      </div>
    );
  };


  const ContentTeam = () => {
    return (
        <div 
            className="team-content-container content"
        >
          <TeamMembers teamMembers={teamMembersData} gridSize={3} />
        </div>
      );
    };



    const teamMembersData = [
        {
          name: "Tanishq Abraham",
          role: "MedARC CEO",
          website: "https://medarc.ai/", 
          picture: "team-pictures/tanishq.png"
        },
        {
          name: "Mihir Tripathy", 
          role: "Core team member",
          website: "https://github.com/mihirneal",
          picture: "team-pictures/mihir.jpg"
        },
        {
          name: "Paul Scotti",
          role: "Principal Investigator",
          website: "http://www.paulscotti.com", 
          picture: "team-pictures/paul.png" 
        }
      ];

    export { ContentTeam }