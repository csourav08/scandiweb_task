import "./App.css"
import React, { Component } from "react"
import Welcome from "./components/category.jsx"
import Topbar from "./components/topbar/topbar"
import Bodybar from "./components/category/category"
import Product from "./components/productpage/product"
// import Counter from "./components/test/counter"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <Topbar />
        <Bodybar />
        <Product />
        {/* <Counter /> */}
      </div>
    )
  }
}
export default App
