import StatisticLine from "./StatisticLine";
const Statistics = (props) => {
    

    return ( 
        <div>

      <StatisticLine text="good"  value ={props.text1} />
      <StatisticLine text="neutral"  value ={props.text2} />
      <StatisticLine text="bad"  value ={props.text3} />
      <StatisticLine text="all"  value ={props.text1 + props.text2 + props.text3} />  
      <StatisticLine text="average"  value ={props.text1/3 + props.text2/3 + props.text3/3} /> 
      <StatisticLine text="positive"  value ={props.text1 + props.text2}  /> 
        </div>
      );
}
 
export default Statistics;