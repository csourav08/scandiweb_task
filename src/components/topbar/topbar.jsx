import React, { Component } from "react"
import "./topbar.css"

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom" //copy
// import { Routes } from "react-router-dom" //copy

class Topbar extends Component {
  render() {
    return (
      <div className={"topbar"}>
        <div className="wrapper">
          <div className="container">
            <div>
              <a href="#Phones" className="navbtn">
                Phones
              </a>
            </div>
            <div>
              <a href="#Clothes" className="navbtn">
                Clothes
              </a>
            </div>
            <div>
              <a href="#Computers" className="navbtn">
                Computers
              </a>
            </div>
          </div>

          <div className="container">
            <img className="logo" src={require("../../images/logo.jpeg")} alt={"Logo"} />
          </div>
          <div className="container">
            <div>
              <img className="currency" src={require("../../images/currency.png")} alt={"currency"} />
            </div>
            <div>
              <img className="cart" src={require("../../images/cart.png")} alt={"cart"} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Topbar
