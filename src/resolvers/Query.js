
function info() {
    return `This is the API of a Zettle App`;
}

function productCatalogs(root, args, context, info) {
    return context.prisma.productCatalogs();
}

module.exports = {
    productCatalogs,
    info
}