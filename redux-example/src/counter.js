import { useDispatch, useSelector } from "react-redux";

const Counter = () => {

    // custom hook from react-redux library
    // taking a function F as argument
    // function F accepts the state and return the relevant part of the state

    // Automatically sets the subscription for this component 
    // to changes in the state ! 
    // Whenever the state changes, this component is notified of the changes in the state
    const count = useSelector(state => state.count);
    const showCount = useSelector(state => state.showCount);

    const dispatch = useDispatch();
    
    const inc = () => {
        // here we are dispatching an action which increments the counter
        dispatch({ type: 'increment' });
    }

    const dec = () => {
        dispatch({ type: 'decrement'});
    }

    const incBy = (amount) => {
        dispatch({ type: 'incBy', amount });
    }

    const toggleCounter = () => {
        dispatch({type: 'toggle'});
    }

    return (
        <div>
            <h1>Redux Counter</h1>
            {showCount && <p>Count: {count}</p>}
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
            <button onClick={e => incBy(5)}>Inc By 5</button>
            <button onClick={e => incBy(7)}>Inc By 7</button>
            <button onClick={toggleCounter}>Toggle</button>
        </div>
    )
}

export default Counter;
