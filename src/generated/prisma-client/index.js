"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Bill",
    embedded: false
  },
  {
    name: "Business",
    embedded: false
  },
  {
    name: "BusinessType",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "ProductCatalog",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "UserBusiness",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/krishna-mohan-36ae98/zettle-gql/dev`
});
exports.prisma = new exports.Prisma();
