const PRODUCTS = require("../data/products");

const resolvers = {
  Query: {
    products: () => PRODUCTS,
    product: (_, { id }) =>
      PRODUCTS.find((product) => product.id === Number(id)),
  },
};

module.exports = resolvers;
