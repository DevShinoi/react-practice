import Student from './Student.jsx'

function App (){
  return(
    <>
      {/* <Student name="Wayne" age ={30} salary={30000} tax={3000} job ="Software Engineer" location ="Phyxsius Solutions Inc."></Student> */}
      <Student name="Vincent Estrera" age ={22} isStudent={true}></Student>
      <Student name="Wayne Estrera" age ={26} isStudent={false}></Student>
      <Student name="Katherine Estrera" age ={19} isStudent={true}></Student>
      <Student name="Ma. Denize Estrera" age ={26} isStudent={false}></Student>
    </>
  );
}

export default App