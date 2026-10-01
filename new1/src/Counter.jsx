import { useEffect } from "react"

const Counter=({Count})=>{
const handlecounter=()=>{
    console.log("handle counter")
}

useEffect(()=>{
    handlecounter();
},[])

    return(
        <div>
            <h1>Conter Value {Count}</h1>
        </div>
    )
}
export default Counter