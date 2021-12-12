import React, { Component } from "react"
import { gql } from "@apollo/client"

import { client } from "../../index"

class ProductDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productId: window.location.pathname.replace("/products/", ""),
      productdetails: {}
    }
  }

  componentDidMount() {
    client
      .query({
        query: gql`
          query {
            product(id: "jacket-canada-goosee") {
              description
            }
          }
        `
      })
      .then(result => {
        console.log("result", result)
        this.setState({ productdetails: result.data.product })
      })
  }

  render() {
    // const id = this.props.match.params.id

    console.log("window.location.href", window.location.pathname.replace("/products", ""))
    return <div></div>
  }
}

export default ProductDetails
