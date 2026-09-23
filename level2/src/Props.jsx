import React from "react";
import PChild from "./PChild"


const Props=()=>{

    let myname="abhi"
    let myage=20

    let mydetail={
        name:"abhishek",
        age:30,
        city:"bhopal",
       
    }

    let arr=[10,40,40,50]
    return(

        
        <div>

            {arr.map((item,index)=>(
            <ul key={index}>

                <li>{item}</li>
            </ul>
        ))}

<h1>This is parrent data</h1>

<PChild myname={myname}/>
        </div>
    )
}

export default Props