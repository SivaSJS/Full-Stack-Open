import StatisticLine from "./StatisticLine";
const Statistics = (props) => {
    const all = props.text1 + props.text2 + props.text3;
    const average = props.text1/3 + props.text2/3 + props.text3/3 ;
    const positive = props.text1 * (100/all)


        if (all === 0)
        return (
          <div>
            <p> No feedbacks Given </p>
          </div>
        )

    return ( 
        <div>

      <StatisticLine text="good"  value ={props.text1} />
      <StatisticLine text="neutral"  value ={props.text2} />
      <StatisticLine text="bad"  value ={props.text3} />
      <StatisticLine text="all"  value ={all} />  
      <StatisticLine text="average"  value ={average} /> 
      <StatisticLine text="positive"  percent ={positive}  /> 
        </div>
      );
}
 
export default Statistics;