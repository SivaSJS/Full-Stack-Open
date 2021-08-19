const Button = (props) => {
    
  console.log(props);
    
    return (
        <div>
            <h1> give feedback</h1>
            <button onClick = {props.goodHandler}>good </button>
            <button onClick = {props.neutralHandler}>neutral</button>
            <button onClick = {props.badHandler}> bad</button>
        </div>

      );
}
 
export default Button;

