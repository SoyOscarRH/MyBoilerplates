import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"

const App: FunctionComponent = () => <main>Hi little world</main>

const DOMNode = document.getElementById("ReactApp")
ReactDOM.render(<App />, DOMNode)
