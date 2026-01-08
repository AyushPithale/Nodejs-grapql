//  to define stucture of data

const { gql } = require("graphql-tag");

// types which graphQL will use to define data
// string, int, float, boolean, id --> uqniue id

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    price: Float!
    category: String!
    inStock: Boolean!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }


  type Mutation{
    createProduct(
      title: String!
      category: String!
      price: Float!
      inStock: Boolean!
      ): Product
  

    deleteProduct(id: ID!): Boolean


    updateProduct(
    id: ID!
       title: String
       category: String
      price: Float
      inStock: Boolean
    ): Product
   }
`;

module.exports = typeDefs;
