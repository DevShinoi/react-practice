// commented codes are for CSS Modules approach
// import styles from './Button.module.css'

function Button() {
  // return(
  //   <button className={styles.button}>Click Me</button>
  // );
  const styles = {
    backgroundColor: "hsl(2, 100%, 56%)",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }

  return(
    <button style={styles}>Click Me</button>
  );
}

export default Button