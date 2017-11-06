import React, { Component } from 'react'

import { graphql } from 'react-apollo'

import gql from 'graphql-tag'


class Products extends Component {
    render() {

        const {loading, allProducts} = this.props.data

        return (

            <article>
                <div>
                        {!loading && allProducts.map(product => (
                    <div className="card" key={product.id}>
                        <h4>{product.name}</h4>
                        <div>
                            <img src={product.imageUrl} alt=""/>
                        </div>
                        <button>Add to cart</button>
                    </div>
                ))}
                    </div>
            </article>
        )
    }
}

const QUERY = gql`
    query {
        allProducts {
            description
            id
            imageUrl
            inventory
            name
            price
            size
        }
    }
`

export default graphql(QUERY)(Products)
