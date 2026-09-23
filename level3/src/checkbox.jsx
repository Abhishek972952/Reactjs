import { useState } from "react";

function checkbox(){

const [checkbox,setcheckbox] =useState([])   ;
const handlecheckbox=(event)=>{
console.log(event.target.value,event.target.checked)

if(event.target.checked)
{
    setcheckbox([...checkbox,event.target.value])
}
else{
    setcheckbox([...checkbox.filter((item)=>item!=event.target.value)])
}
}
return(
    <div>
        <h3>select your check box</h3>
<input onChange={handlecheckbox} type="checkbox" id="PHP" value="php"/>
<label htmlFor="php">php</label><br></br>

<input  onChange={handlecheckbox} type="checkbox" id="JAVA" value="java"/>
<label htmlFor="java">java</label><br></br>

<input  onChange={handlecheckbox} type="checkbox" id="PYTHON" value="python"/>
<label htmlFor="python">python</label><br></br>

<input onChange={handlecheckbox} type="checkbox" id="NODE" value="node"/>
<label htmlFor="node">node</label><br></br>

<h1>{checkbox.toString()}</h1>


    </div>
)
}
export default checkbox