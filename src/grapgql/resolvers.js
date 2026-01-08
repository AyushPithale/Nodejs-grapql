const PRODUCTS = require("../data/products");

const resolvers = {
  Query: {
    products: () => PRODUCTS,
    product: (_, { id }) =>
      PRODUCTS.find((product) => product.id == Number(id)),
  },

  Mutation: {
    createProduct: (_, {title, category, price, inStock}) => {
      console.log("craetePRoduct",{title, category, price, inStock} )
       const newProduct = {
        id : String(PRODUCTS.length + 1),
        title,
        category,
        price,
        inStock
       }

       PRODUCTS.push(newProduct)
       return newProduct
    },

    deleteProduct: (_, {id}) => {
      const productIndex = PRODUCTS.findIndex((product) => product.id === id)
      console.log("deletedProductIndex", productIndex)
      if(productIndex === -1)  return false
      
      PRODUCTS.splice(productIndex, 1)

      return true

    },


    updateProduct: (_, {id, ...updates}) => {
     const productIndex = PRODUCTS.findIndex((product) => product.id === id)
      console.log("updateProductNndex", productIndex)
        if(productIndex === -1)  return null

      

        const updatedProduct = {
          ...PRODUCTS[productIndex],
          ...updates
        }

        PRODUCTS[productIndex] = updatedProduct
        return updatedProduct
    }
  }
};


module.exports = resolvers;
