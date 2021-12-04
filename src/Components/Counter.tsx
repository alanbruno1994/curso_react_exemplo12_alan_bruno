import {useSelector, useDispatch} from 'react-redux'
import {State} from '../store/index'

export default function Counter(){
   const {counter} = useSelector((state:State)=>state)
   const dispatch=useDispatch();

    const incrementHandler=()=>{
        dispatch({type:'increment'})
    }

    const decrementHandler=()=>{
        dispatch({type:'decrement'})
    }

    const reset=()=>{
        dispatch({type:'initialCounter',payload:0})
    }



    return <div>
        <p>Counter {counter}</p>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
}