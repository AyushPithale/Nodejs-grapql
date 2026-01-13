const Product = require("../models/Product");

const resolvers = {
  Query: {
    products: async () => await Product.find(),
    product: async (_, { id }) => await Product.findById(id),
  },

  Mutation: {
    createProduct: async (_, { title, category, price, inStock }) => {
      console.log("craetePRoduct", { title, category, price, inStock });
      const newProduct = {
        title,
        category,
        price,
        inStock,
      };

      const newlyCreadetdProduct = new Product(newProduct);
      return await newlyCreadetdProduct.save();
    },

    updateProduct: async (_, { id, ...updates }) => {
      return await Product.findByIdAndUpdate(id, updates, { new: true });
    },

    deleteProduct: async (_, { id }) => {
      return await Product.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;
