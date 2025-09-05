import profilePicture from '../assets/images.jpg';
import './index.css';

function Card(){
  return (
    <div className="card">
      <img className='card-image' src={profilePicture} alt="Profile Picture" />
      <h2 className='card-title'>Wayne Estrera</h2>
      <p className='card-text'>I am a Software Developer and play video games</p>
    </div>
  );
}

export default Card