import { createStore } from 'redux';

const counterReducer = (state = { count: 0, showCount: true }, action) => {
    console.log(action);
    if (action.type === 'increment') {
        return { ...state, count: state.count + 1 };
    }
    if (action.type === 'decrement') {
        return { ...state, count: state.count - 1 };
    }
    if (action.type === 'incBy') {
        return { ...state, count: state.count + action.amount };
    }
    if (action.type === 'toggle') {
        return { ...state, showCount: !state.showCount };
    }
    return state;
}

const store = createStore(counterReducer);

export default store;
