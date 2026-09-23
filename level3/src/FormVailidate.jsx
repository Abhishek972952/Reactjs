import React,{useState} from "react";

const FormVailidate=()=>{
     let [name,setname]=useState("");
      let [email,setemail]=useState("");
   let [pass,setpass]=useState("");;

    

   let handlename=(e)=>{
    setname(e.target.value)

   }
let handleSubmit=(e)=>{
    e.preventDefault()

    console.log(name)
 console.log(email)
  console.log(pass)

setname("")
setemail("")
setpass("")



}

return(

    <>
    <form onSubmit={handleSubmit}>

  Enter Name<input type="text" value={name} onChange={handlename}/><br></br>
    Enter Email<input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}/><br></br>
      Enter Pass<input type="text" value={pass} onChange={(e)=>{setpass(e.target.value)}}/><br></br>


      <button type="Submit">submit</button>

    </form>
    
    </>
)


}
export default  FormVailidate