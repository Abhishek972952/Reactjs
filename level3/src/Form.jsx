import React,{useState} from "react";

const Form=()=>{
    let [name,setname]=useState("");
    let [age,setAge]=useState("");

    

// let handleChange=(e)=>{


//     console.log(e.target.value);
//     setname(e.target.value);
// }


    return(

        <>
            Enter Name<input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
            
            Enter Age<input type="text" value={age} onChange={(e)=>{setage(e.target.value)}}/>
        </>
    )
    

    
}
export default Form