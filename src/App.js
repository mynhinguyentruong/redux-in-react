import React from "react"
import {connect} from "react-redux"

// connect is Higher Order Component
// takes 2 arguments
// 1st: what parts of the global state does this component want access to
// 2nd: what actions do you want to be able to dispatch from this component

// connect("What parts of state do you want", "What action do you want to dispatch")

// connect(mapStateToPropsFunc, mapDispatchToPropsObject)

function App(props) {    
    return (
        <div>
            <h1>{props.bananas}</h1>
            <button>-</button>
            <button>+</button>
        </div>
    )
}

function mapStateToProps(globalState) {
    // return an object where the keys 
    // are the name of the props your component want
    // and the value are the actual parts
    // of global state that your component want

    return {
        bananas: globalState
    }
}

export default connect(mapStateToProps, {})(App)