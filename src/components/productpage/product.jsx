import React, { Component } from "react"
import "./product.css"

class Product extends Component {
  render() {
    return (
      <div className="second">
        <div>
          <img className="prod-pic" src={require("../../images/Product-D.jpg")} alt={"Product D"} />
        </div>
        <div>
          <h3>Apollo Running Short</h3>
          <h4>$50.00</h4>
        </div>
      </div>
    )
  }
}
export default Product

// {/* <img className="prod-pic" src={require("../../images/ProductD.jpg")} alt={"Product D"} /> */}
