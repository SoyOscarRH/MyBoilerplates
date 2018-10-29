// ======================================================================
// ============          WEB APP IN REACT           =====================
// ======================================================================

import React from "react"
import ReactDOM from "react-dom"
import M from "materialize-css"


class App extends React.Component {

    constructor(props) {
        super (props)
    }
 

    render() {

        return (
            <main>
                <br />

                Hi World 
                
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </main>
        )
    }
    
}


ReactDOM.render(<App />, document.getElementById("ReactApp"))