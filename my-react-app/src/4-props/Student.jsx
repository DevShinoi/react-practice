import './index.css'
// import PropTypes from 'prop-types'; //Depracated 

function Student(props) {
  return (

    <div className='student '>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>

    </div> 
    
  );
}
// proprtpye is a Depracated feature used for debugging purposes only
// Student.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   isStudent: PropTypes.bool
// }

export default Student