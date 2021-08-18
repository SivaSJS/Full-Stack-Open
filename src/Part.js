import React from 'react'

function Part (props){
   console.log(props);
    return (
      <div>
        <p>{props.tot1} {props.exe1} </p>
        <p>{props.tot2} {props.exe2}</p>
        <p>{props.tot3} {props.exe3}</p>
      </div>
  
    )
}

export default Part;