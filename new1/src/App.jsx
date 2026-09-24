// import User from "./User"
// import Student from "./Student"
// import { useState } from "react";

// function App() {

// //   let userObject={
// // name:"abhi",
// // age:"20",
// // email:"latest.com"
// //   }
  
// //    let userObject2={
// // name:"mishra",
// // age:"30",
// // email:"latest@gmail.com"
// //   }

// // const [student,setStudent] =useState() 
  
//   return (

//     <div>
//       <h1>Toggle Hide and show</h1>

//      {/* {student && <Student name={student}/>}
//      <button onClick={()=>(setStudent("mishra"))}>Update student name</button>

//       {/* <User  name="ABHI MISHRA" age={20} email="x1233dfdfd@gmail.com" city="Bihar"/> */}
//       {/* <User  user={userObject}/>
//       <User user={userObject2}/> */
//      </div>}
//      )
      
// }}

// export default App
// import { useState } from "react"

// function App(){
//   const[display,setdispaly]=useState(false
//   )
//   return(
//     <div>
//       <h1>Toggle in  react js</h1>

//       <button onClick={()=>setdispaly(!display)}>Toggle</button>
//       {
//         display?<h1>Abhi mishra</h1>:null
//       }

      
//     </div>
//   )
// 

const fruit=(name)=>{
  alert(name)
}

function App(){

function called(){
alert("Function called")
}  

// const fruit=(name)=>{
//   alert(name)
// }
  return(
    <div>
      <h1>Event and function call</h1>
      <button onClick={()=>fruit("Apple")}>Apple</button>
      <button onClick={()=>fruit("Banana")}>Banana</button>
    </div>
  )
}
export default App