import "./App.css"
import React, { Component } from "react"
import Welcome from "./components/category.jsx"
import Topbar from "./components/topbar/topbar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <Topbar />
      </div>
    )
  }
}
export default App
