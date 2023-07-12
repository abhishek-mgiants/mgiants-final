import React from 'react';
import './OurTeam.css';

const teamMembers = [
  {
    id: 1,
    name: 'Name',
    designation: 'Profile',
    imgPath: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Name',
    designation: 'Profile',
    imgPath: 'https://images.pexels.com/photos/5668769/pexels-photo-5668769.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Name',
    designation: 'Profile',
    imgPath: 'https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'Name',
    designation: 'Profile',
    imgPath: 'https://images.pexels.com/photos/3760373/pexels-photo-3760373.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const OurTeam = (props) => {
  const renderTeamMembers = () => {
    return teamMembers.map((member) => (
      <div className="team-box" key={member.id}>
        <div className="overlay-top">{member.name}</div>
        <div className="overlay-bottom">{member.designation}</div>
        <img src={member.imgPath} alt={member.name} /> 
      </div>
    ));
  };

  return (
 <> <button className='mgiants-back-button'  onClick={props.handleBackClick} >
 <i className="fa-solid fa-circle-left"></i>
 </button>
    <div className="main-container">
      <div className="header-container">
        <h2 className="heading">Our Team</h2>
      </div>
      <div className="teams-container">{renderTeamMembers()}</div>
    </div>
 
 </>
  );
};

export default OurTeam;
