const StatisticLine = ({text , value ,percent}) => {
   
      return(
          <div>
                 <table>
            <tbody>
             <tr>
                <td>{text}</td>
                <td>{value} {percent} </td>   
             </tr>
            </tbody>
           </table>
          </div>
      )
  }
    
 
export default StatisticLine;