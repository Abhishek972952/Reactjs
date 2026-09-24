import User from "./User"
import Student from "./Student"
import { useState } from "react";

function App() {

//   let userObject={
// name:"abhi",
// age:"20",
// email:"latest.com"
//   }
  
//    let userObject2={
// name:"mishra",
// age:"30",
// email:"latest@gmail.com"
//   }

// const [student,setStudent] =useState() 
  
  return (

    <div>
      <h1>Toggle Hide and show</h1>

     {/* {student && <Student name={student}/>}
     <button onClick={()=>(setStudent("mishra"))}>Update student name</button>

      {/* <User  name="ABHI MISHRA" age={20} email="x1233dfdfd@gmail.com" city="Bihar"/> */}
      {/* <User  user={userObject}/>
      <User user={userObject2}/> */
     </div>}
     )
      
}}

export default App
import { useState } from "react"

function App(){
  const[display,setdispaly]=useState(false
  )
  return(
    <div>
      <h1>Toggle in  react js</h1>

      <button onClick={()=>setdispaly(!display)}>Toggle</button>
      {
        display?<h1>Abhi mishra</h1>:null
      }

      
    </div>
  )


//-----function called---------

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


//-------Handle and dropdown-----

function App(){

  const[gender,setGender]=useState("male")
  const[city,setCity]=useState("bhopal")
  return(
    <div>
      <h1>Handle to radio and Dropdown</h1>
      <h4>Select Gender</h4>

      <input type="radio"onChange={(event)=>setGender(event.target.value)} name="gender" value=
      "male" checked={gender=="male"} id="male"/>Male

      <label htmlFor="male"></label>

       <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value ="female" checked={gender=="female"} id="female"/>Female

       <label htmlFor="female"></label>

       <h2>Select Gender:{gender}</h2>
       <hr></hr>
<select onChange={(event)=>setCity(event.target.value)} defaultValue={"bhopal"}>

<option value="delhi">Delhi</option>
<option value="bhopal">Bhopal</option>
<option value="noida">Noida</option>

</select>

<h2>Selct City:{city}</h2>

    </div>
  )

}

function App(){

  const userData=[
    {
name:"abhi",
id:1,
age:"20",
email:"abhiaaa@gmaill.com"

 }
 ,
 {
 name:"mishra",
id:2,
age:"21",
email:"mishraaaa@gmaill.com"
 },

 {
 name:"Vikash",
id:3,
age:"30",
email:"latestaa@gmaill.com"
 },

 {
 name:"Avinash",
id:2,
age:"40",
email:"raaaa@gmaill.com"
 }

  ]
  return(
<div>
  <h1>Lopp in map </h1>
  <table border={1}>
    <thead>
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Age</td>
        <td>City</td>
      </tr>

      
    </thead>
    <tbody>
      {
        userData.map((user)=>(
          <tr>
            <td>{user.id}</td>
             <td>{user.name}</td>
              <td>{user.age}</td>
               <td>{user.email}</td>
          </tr>
        ))
      }
    </tbody>
    
  </table>
</div>
  )
}
export default App