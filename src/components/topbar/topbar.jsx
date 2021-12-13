import React, { Component } from "react"
import "./topbar.css"

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom" //copy
// import { Routes } from "react-router-dom" //copy

class Topbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCurrencyModal: false
    }
  }

  toggleShowCurrencyModal = () => this.setState({ showCurrencyModal: !this.state.showCurrencyModal })

  onSelectCurrency = currency => {
    localStorage.setItem("selectedCurrency", currency)
    this.toggleShowCurrencyModal()
  }

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
            <div onClick={() => this.toggleShowCurrencyModal()}>
              <img className="currency" src={require("../../images/currency.png")} alt={"currency"} />
            </div>
            <div>
              <img className="cart" src={require("../../images/cart.png")} alt={"cart"} />
            </div>
          </div>
        </div>
        {this.state.showCurrencyModal && (
          <div className="currencyModal">
            <div onClick={() => this.onSelectCurrency("USD")}>USD</div>
            <div onClick={() => this.onSelectCurrency("GBP")}>GBP</div>
            <div onClick={() => this.onSelectCurrency("AUD")}>AUD</div>
            <div onClick={() => this.onSelectCurrency("JPY")}>JPY</div>
            <div onClick={() => this.onSelectCurrency("RUB")}>RUB</div>
          </div>
        )}
      </div>
    )
  }
}
export default Topbar
