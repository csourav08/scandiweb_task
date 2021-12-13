import React, { Component } from "react"
import { Link } from "react-router-dom"
import { gql } from "@apollo/client"

import "./category.css"
import { client } from "../../index"

export const getCurrencyIndex = currency => {
  switch (currency) {
    case "USD":
      return 0
    case "GBP":
      return 1
    case "AUD":
      return 2
    case "JPY":
      return 3
    case "RUB":
      return 4

    default:
      return 0
  }
}

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      selectedCurrency: localStorage.getItem("selectedCurrency")
    }
  }

  componentDidMount() {
    client
      .query({
        query: gql`
          query LaunchList {
            category {
              name

              products {
                name
                gallery
                id
                prices {
                  currency
                  amount
                }
              }
            }
          }
        `
      })
      .then(result => {
        this.setState({ products: result.data.category.products })
      })

    setInterval(() => {
      this.setState({ selectedCurrency: localStorage.getItem("selectedCurrency") })
    }, 1000)
  }

  render() {
    console.log(this.state.products)
    const currencyIndex = getCurrencyIndex(this.state.selectedCurrency)

    return (
      <div className="categoryContainer">
        <div className="categoryName">Category Name</div>
        <div className="parent">
          {this.state.products.map(product => {
            return (
              <Link key={product.name} to={`/products/${product.id}`}>
                <div className="itemContainer">
                  <div className="imageContainer">
                    <img className="productImage" src={product.gallery[0]} alt="product image" />
                  </div>
                  <div>
                    <h3 className="productName">{product.name}</h3>
                    <h4 className="productPrice">{`${this.state.selectedCurrency} ${product.prices[currencyIndex].amount}`}</h4>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}
export default Category
