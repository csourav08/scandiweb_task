import React, { Component } from "react"
import { gql } from "@apollo/client"

import { client } from "../../index"
import { getCurrencyIndex } from "../category/category"
import "./productdetails.css"

class ProductDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productId: window.location.pathname.replace("/products/", ""),
      productdetails: null,
      selectedCurrency: localStorage.getItem("selectedCurrency")
    }
  }

  componentDidMount() {
    const id = this.state.productId

    client
      .query({
        query: gql`
          query product($id: String!) {
            product(id: $id) {
              description
              gallery
              brand
              prices {
                currency
                amount
              }
            }
          }
        `,
        variables: { id }
      })
      .then(result => {
        this.setState({ productdetails: result.data.product })
      })

    setInterval(() => {
      this.setState({ selectedCurrency: localStorage.getItem("selectedCurrency") })
    }, 1000)
  }

  render() {
    console.log("productdetails", this.state.productdetails)
    const currencyIndex = getCurrencyIndex(this.state.selectedCurrency)
    if (!this.state.productdetails) {
      return null
    }
    return (
      <div className="productContainer">
        <div>{`${this.state.selectedCurrency} ${this.state.productdetails.prices[currencyIndex].amount}`}</div>
        <div>{this.state.productdetails.brand}</div>
        {this.state.productdetails.description && <div id="terms-content" dangerouslySetInnerHTML={{ __html: this.state.productdetails.description }} />}

        {this.state.productdetails.gallery.map(imageSrc => {
          return (
            <div>
              <img className="productImage" src={imageSrc} alt={this.state.productId} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ProductDetails
