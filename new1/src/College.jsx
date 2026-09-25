const College=(collegedata)=>{
    return(
        <div style={{
            backgroundColor:"#ccc"
        }
            
        }>
        <h1>Name:{collegedata.name}</h1>
          <ul>
            <li>
                <h3>Branch:{collegedata.branch}</h3>
            </li>
          
            <li>
                <h3>Skill:{collegedata.skill}</h3>
            </li>
          </ul>
        </div>
    )
}

export default College

