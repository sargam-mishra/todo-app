import "./Counter.css"


const Counter = (props) => {

const onIncrement1 = (x) => {
    props.updateValue(props.value+x);
}
    return (
        <div> 
            <button className = 'button' onClick = {() => onIncrement1(props.incrementVal)}> {props.incrementVal} </button>
         </div>
    )

}


export default Counter;