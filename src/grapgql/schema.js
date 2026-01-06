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
`;

module.exports = typeDefs;
