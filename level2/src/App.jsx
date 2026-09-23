import Navber from "./Navbar"
import {Footer1,Footer2} from "./Footer"


let App=()=>{

  let abhi="mishra"
  let dndc={
    color:"blue"
  }
return(
 <div>
<Navber/>

<p>my name is{abhi}</p>

  <h1 style={dndc}>Avinash Mishra</h1>

  <Footer1/>
   <Footer2/>


 </div>

)
}

export default App