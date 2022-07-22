import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from './redux'

// connect is Higher Order Component
// takes 2 arguments
// 1st: what parts of the global state does this component want access to
// 2nd: what actions do you want to be able to dispatch from this component

// connect("What parts of state do you want", "What action do you want to dispatch")

// connect(mapStateToPropsFunc, mapDispatchToPropsObject)

function App() {  
    
    const count = useSelector(state => state)
    const dispatch = useDispatch()
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

// function mapStateToProps(globalState) {
//     // return an object where the keys 
//     // are the name of the props your component want
//     // and the value are the actual parts
//     // of global state that your component want

//     return {
//         bananas: globalState
//     }
// }

// const mapDispatchToProps = {
//     oranges: increment,
//     apples: decrement
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App