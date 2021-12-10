import React, { Component } from "react"
import "./product.css"
import { client } from "../../index"
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client"

class Product extends Component {
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
    return this.state.products.map(product => {
      return (
        <div className="second">
          <div>
            <img src={product.gallery[0]} alt="" />
          </div>

          <div>
            <h3>{product.name}</h3>
          </div>

          <div>
            <h4>${product.prices[0].amount}</h4>
          </div>
        </div>
      )
    })
  }
}
export default Product
