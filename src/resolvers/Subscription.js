function newProductCatalogSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.productCatalog({ mutation_in: ['CREATED'] }).node()
  }
  
  const newProductCatalog = {
    subscribe: newProductCatalogSubscribe,
    resolve: payload => {
      return payload
    },
  }
  
  module.exports = {
    newProductCatalog,
  }
  