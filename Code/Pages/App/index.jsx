// ======================================================================
// ============          WEB APP IN REACT           =====================
// ======================================================================

import React from "react"
import ReactDOM from "react-dom"
//import M from "materialize-css"
//import { HashRouter, Switch, Route, Link } from 'react-router-dom'

import Header from "../Header/"
import Footer from "../Footer/"

class App extends React.Component {

    constructor(props) {
        super (props)

        this.state = {
            SideMenu: null
        }
    }
 
    componentDidMount() {
        let DOMNode = document.getElementById('SideNav')
        let SideMenu = M.Sidenav.init(DOMNode, {})

        this.setState({SideMenu}) 
    }

    render() {

        return (
            <React.Fragment>
                <Header />

                <main>
                    <br />

                    Hola
                    
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                </main>

                <Footer />
            </React.Fragment>
        )
    }
    
}


ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById("ReactApp"))