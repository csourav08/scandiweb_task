import React, { Component } from "react"
import { Link } from "react-router-dom"
import { gql } from "@apollo/client"

import "./category.css"
import { client } from "../../index"

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
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
  }

  render() {
    console.log(this.state.products)
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
                    <h4 className="productPrice">${product.prices[0].amount}</h4>
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
