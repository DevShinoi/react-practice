//import styles from './Button.module.css';

function Button(){

  const styles = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }


  return (
    // <div>
    //   <button className={styles.button}>Hello World</button>
    // </div>
    <button style={styles}>Click Me</button>
  );
} 

export default Button;