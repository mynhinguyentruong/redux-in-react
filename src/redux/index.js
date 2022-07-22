import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"

export function increment() {
    //simulate async by using setTimeOut
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: "INCREMENT"})
        }, 2000)
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

export function reducer(count = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
}


const store = createStore(reducer, applyMiddleware(thunk))
console.log(store)
store.subscribe(() => console.log(store.getState()))
export default store