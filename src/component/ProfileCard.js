import "./ProfileCard.css";
import { Container, Row, Col } from 'react-grid-system';

function ProfileCard({person}) {
  return (
    
            <div className="card-container col-lg-4 col-md-6 col-sm-12">
                    <div className='card1'>
                    <div className='id1'>{person.id}</div>
                    <div className='img1' >
                        <img className='img11' src={person.avatar} />
                    </div>
                    <h3>{person.first_name}</h3>
                    </div>
            </div>
           
 
    
  );
}

export default ProfileCard;