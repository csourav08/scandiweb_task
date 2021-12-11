import "./App.css"
import React, { Component } from "react"

import Topbar from "./components/topbar/topbar"
import Category from "./components/category/category"
// import Counter from "./components/test/counter"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Welcome /> */}
        <Topbar />

        <Category />
        {/* <Counter /> */}
      </div>
    )
  }
}
export default App
