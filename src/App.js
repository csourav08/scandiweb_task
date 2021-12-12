import React, { Component } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Topbar from "./components/topbar/topbar"
import Category from "./components/category/category"
import ProductDetails from "./components/productdetails/productdetails"
// import Counter from "./components/test/counter"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Category />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            {/* <Route path="*" element={<NotFound />} /> */} */}
          </Routes>
        </Router>
      </div>
    )
  }
}
export default App
