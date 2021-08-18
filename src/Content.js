import React from 'react'
import Part from './Part'
function Content (props){
   console.log(props);

    return (
      <div>
        <Part
                   tot1 =   {props.parts[0].name}  exe1 = {props.parts[0].exercises}
      

        />
        <Part 
                     tot2 = {props.parts[1].name} exe2 = {props.parts[1].exercises}
      


        />
        <Part 
                    tot3 ={props.parts[2].name}   exe3 ={props.parts[2].exercises}
      
        />
         
      </div>
  
    )
}

export default Content;