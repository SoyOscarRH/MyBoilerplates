// ======================================================================
// ============          WEB APP IN REACT           =====================
// ======================================================================

import React from "react"
import ReactDOM from "react-dom"
import M from "materialize-css"
import { HashRouter, Switch, Route, Link } from 'react-router-dom'


class App extends React.Component {

    constructor(props) {
        super (props)

        this.state = {
        }
    }
 

    render() {

        return (
            <React.Fragment>

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

            </React.Fragment>
        )
    }
    
}


ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById("ReactApp"))
