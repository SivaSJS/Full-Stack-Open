const StatisticLine = (props) => {
    if (props.value === 0)
        return ( 
            <div>
                  <p> No feedbacks given</p>
           </div>
                  
                  )
            
      
    
      return(
          <div>
                 <table>
            <tbody>
             <tr>
                <td>{props.text}</td>
                <td>{props.value} </td>
             
             </tr>
            </tbody>
           </table>
          </div>
      )
  }
    
 
export default StatisticLine;