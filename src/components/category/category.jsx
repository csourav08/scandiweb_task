import React, { Component } from "react"
import "./category.css"
import { client } from "../../index"
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client"

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
        this.setState({ products: result.data.category.products }) // ctaegory and product from inspect element
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
              <div className="itemContainer">
                <div className="imageContainer">
                  <img className="productImage" src={product.gallery[0]} alt="" />
                </div>
                <div>
                  <h3 className="productName">{product.name}</h3>
                  <h4 className="productPrice">${product.prices[0].amount}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default Category
