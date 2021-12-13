import React, { Component } from "react"
import { gql } from "@apollo/client"

import { client } from "../../index"

class ProductDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productId: window.location.pathname.replace("/products/", ""),
      productdetails: null
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
            }
          }
        `,
        variables: { id }
      })
      .then(result => {
        this.setState({ productdetails: result.data.product })
      })
  }

  render() {
    console.log("productdetails", this.state.productdetails)
    if (!this.state.productdetails) {
      return null
    }
    return this.state.productdetails.gallery.map(imageSrc => {
      return <img className="productImage" src={imageSrc} alt={this.state.productId} />
    })
  }
}

export default ProductDetails
