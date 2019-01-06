function addProductCatalog(root, args, context) {
    return context.prisma.createProductCatalog({
        name: args.name,
        description: args.description,
        unit: args.unit,
        price: args.price,
    });
}

module.exports = {
    addProductCatalog
}