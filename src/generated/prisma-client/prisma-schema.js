module.exports = {
        typeDefs: /* GraphQL */ `type AggregateBill {
  count: Int!
}

type AggregateBusiness {
  count: Int!
}

type AggregateBusinessType {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateProductCatalog {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserBusiness {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bill {
  id: ID!
  biller: Business!
  payee: User!
  cart(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  createdDate: String
  total: Float!
  isSettled: Boolean
}

type BillConnection {
  pageInfo: PageInfo!
  edges: [BillEdge]!
  aggregate: AggregateBill!
}

input BillCreateInput {
  biller: BusinessCreateOneWithoutBillsInput!
  payee: UserCreateOneWithoutBillsInput!
  cart: ProductCreateManyWithoutBillInput
  createdDate: String
  total: Float!
  isSettled: Boolean
}

input BillCreateManyWithoutBillerInput {
  create: [BillCreateWithoutBillerInput!]
  connect: [BillWhereUniqueInput!]
}

input BillCreateManyWithoutPayeeInput {
  create: [BillCreateWithoutPayeeInput!]
  connect: [BillWhereUniqueInput!]
}

input BillCreateOneWithoutCartInput {
  create: BillCreateWithoutCartInput
  connect: BillWhereUniqueInput
}

input BillCreateWithoutBillerInput {
  payee: UserCreateOneWithoutBillsInput!
  cart: ProductCreateManyWithoutBillInput
  createdDate: String
  total: Float!
  isSettled: Boolean
}

input BillCreateWithoutCartInput {
  biller: BusinessCreateOneWithoutBillsInput!
  payee: UserCreateOneWithoutBillsInput!
  createdDate: String
  total: Float!
  isSettled: Boolean
}

input BillCreateWithoutPayeeInput {
  biller: BusinessCreateOneWithoutBillsInput!
  cart: ProductCreateManyWithoutBillInput
  createdDate: String
  total: Float!
  isSettled: Boolean
}

type BillEdge {
  node: Bill!
  cursor: String!
}

enum BillOrderByInput {
  id_ASC
  id_DESC
  createdDate_ASC
  createdDate_DESC
  total_ASC
  total_DESC
  isSettled_ASC
  isSettled_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BillPreviousValues {
  id: ID!
  createdDate: String
  total: Float!
  isSettled: Boolean
}

input BillScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdDate: String
  createdDate_not: String
  createdDate_in: [String!]
  createdDate_not_in: [String!]
  createdDate_lt: String
  createdDate_lte: String
  createdDate_gt: String
  createdDate_gte: String
  createdDate_contains: String
  createdDate_not_contains: String
  createdDate_starts_with: String
  createdDate_not_starts_with: String
  createdDate_ends_with: String
  createdDate_not_ends_with: String
  total: Float
  total_not: Float
  total_in: [Float!]
  total_not_in: [Float!]
  total_lt: Float
  total_lte: Float
  total_gt: Float
  total_gte: Float
  isSettled: Boolean
  isSettled_not: Boolean
  AND: [BillScalarWhereInput!]
  OR: [BillScalarWhereInput!]
  NOT: [BillScalarWhereInput!]
}

type BillSubscriptionPayload {
  mutation: MutationType!
  node: Bill
  updatedFields: [String!]
  previousValues: BillPreviousValues
}

input BillSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BillWhereInput
  AND: [BillSubscriptionWhereInput!]
  OR: [BillSubscriptionWhereInput!]
  NOT: [BillSubscriptionWhereInput!]
}

input BillUpdateInput {
  biller: BusinessUpdateOneRequiredWithoutBillsInput
  payee: UserUpdateOneRequiredWithoutBillsInput
  cart: ProductUpdateManyWithoutBillInput
  createdDate: String
  total: Float
  isSettled: Boolean
}

input BillUpdateManyDataInput {
  createdDate: String
  total: Float
  isSettled: Boolean
}

input BillUpdateManyMutationInput {
  createdDate: String
  total: Float
  isSettled: Boolean
}

input BillUpdateManyWithoutBillerInput {
  create: [BillCreateWithoutBillerInput!]
  delete: [BillWhereUniqueInput!]
  connect: [BillWhereUniqueInput!]
  disconnect: [BillWhereUniqueInput!]
  update: [BillUpdateWithWhereUniqueWithoutBillerInput!]
  upsert: [BillUpsertWithWhereUniqueWithoutBillerInput!]
  deleteMany: [BillScalarWhereInput!]
  updateMany: [BillUpdateManyWithWhereNestedInput!]
}

input BillUpdateManyWithoutPayeeInput {
  create: [BillCreateWithoutPayeeInput!]
  delete: [BillWhereUniqueInput!]
  connect: [BillWhereUniqueInput!]
  disconnect: [BillWhereUniqueInput!]
  update: [BillUpdateWithWhereUniqueWithoutPayeeInput!]
  upsert: [BillUpsertWithWhereUniqueWithoutPayeeInput!]
  deleteMany: [BillScalarWhereInput!]
  updateMany: [BillUpdateManyWithWhereNestedInput!]
}

input BillUpdateManyWithWhereNestedInput {
  where: BillScalarWhereInput!
  data: BillUpdateManyDataInput!
}

input BillUpdateOneRequiredWithoutCartInput {
  create: BillCreateWithoutCartInput
  update: BillUpdateWithoutCartDataInput
  upsert: BillUpsertWithoutCartInput
  connect: BillWhereUniqueInput
}

input BillUpdateWithoutBillerDataInput {
  payee: UserUpdateOneRequiredWithoutBillsInput
  cart: ProductUpdateManyWithoutBillInput
  createdDate: String
  total: Float
  isSettled: Boolean
}

input BillUpdateWithoutCartDataInput {
  biller: BusinessUpdateOneRequiredWithoutBillsInput
  payee: UserUpdateOneRequiredWithoutBillsInput
  createdDate: String
  total: Float
  isSettled: Boolean
}

input BillUpdateWithoutPayeeDataInput {
  biller: BusinessUpdateOneRequiredWithoutBillsInput
  cart: ProductUpdateManyWithoutBillInput
  createdDate: String
  total: Float
  isSettled: Boolean
}

input BillUpdateWithWhereUniqueWithoutBillerInput {
  where: BillWhereUniqueInput!
  data: BillUpdateWithoutBillerDataInput!
}

input BillUpdateWithWhereUniqueWithoutPayeeInput {
  where: BillWhereUniqueInput!
  data: BillUpdateWithoutPayeeDataInput!
}

input BillUpsertWithoutCartInput {
  update: BillUpdateWithoutCartDataInput!
  create: BillCreateWithoutCartInput!
}

input BillUpsertWithWhereUniqueWithoutBillerInput {
  where: BillWhereUniqueInput!
  update: BillUpdateWithoutBillerDataInput!
  create: BillCreateWithoutBillerInput!
}

input BillUpsertWithWhereUniqueWithoutPayeeInput {
  where: BillWhereUniqueInput!
  update: BillUpdateWithoutPayeeDataInput!
  create: BillCreateWithoutPayeeInput!
}

input BillWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  biller: BusinessWhereInput
  payee: UserWhereInput
  cart_every: ProductWhereInput
  cart_some: ProductWhereInput
  cart_none: ProductWhereInput
  createdDate: String
  createdDate_not: String
  createdDate_in: [String!]
  createdDate_not_in: [String!]
  createdDate_lt: String
  createdDate_lte: String
  createdDate_gt: String
  createdDate_gte: String
  createdDate_contains: String
  createdDate_not_contains: String
  createdDate_starts_with: String
  createdDate_not_starts_with: String
  createdDate_ends_with: String
  createdDate_not_ends_with: String
  total: Float
  total_not: Float
  total_in: [Float!]
  total_not_in: [Float!]
  total_lt: Float
  total_lte: Float
  total_gt: Float
  total_gte: Float
  isSettled: Boolean
  isSettled_not: Boolean
  AND: [BillWhereInput!]
  OR: [BillWhereInput!]
  NOT: [BillWhereInput!]
}

input BillWhereUniqueInput {
  id: ID
}

type Business {
  id: ID!
  name: String!
  type: BusinessType!
  isVerified: Boolean
  gstNumber: String
  bills(where: BillWhereInput, orderBy: BillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bill!]
}

type BusinessConnection {
  pageInfo: PageInfo!
  edges: [BusinessEdge]!
  aggregate: AggregateBusiness!
}

input BusinessCreateInput {
  name: String!
  type: BusinessTypeCreateOneWithoutBusinessesInput!
  isVerified: Boolean
  gstNumber: String
  bills: BillCreateManyWithoutBillerInput
}

input BusinessCreateManyWithoutTypeInput {
  create: [BusinessCreateWithoutTypeInput!]
  connect: [BusinessWhereUniqueInput!]
}

input BusinessCreateOneWithoutBillsInput {
  create: BusinessCreateWithoutBillsInput
  connect: BusinessWhereUniqueInput
}

input BusinessCreateWithoutBillsInput {
  name: String!
  type: BusinessTypeCreateOneWithoutBusinessesInput!
  isVerified: Boolean
  gstNumber: String
}

input BusinessCreateWithoutTypeInput {
  name: String!
  isVerified: Boolean
  gstNumber: String
  bills: BillCreateManyWithoutBillerInput
}

type BusinessEdge {
  node: Business!
  cursor: String!
}

enum BusinessOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  isVerified_ASC
  isVerified_DESC
  gstNumber_ASC
  gstNumber_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BusinessPreviousValues {
  id: ID!
  name: String!
  isVerified: Boolean
  gstNumber: String
}

input BusinessScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  isVerified: Boolean
  isVerified_not: Boolean
  gstNumber: String
  gstNumber_not: String
  gstNumber_in: [String!]
  gstNumber_not_in: [String!]
  gstNumber_lt: String
  gstNumber_lte: String
  gstNumber_gt: String
  gstNumber_gte: String
  gstNumber_contains: String
  gstNumber_not_contains: String
  gstNumber_starts_with: String
  gstNumber_not_starts_with: String
  gstNumber_ends_with: String
  gstNumber_not_ends_with: String
  AND: [BusinessScalarWhereInput!]
  OR: [BusinessScalarWhereInput!]
  NOT: [BusinessScalarWhereInput!]
}

type BusinessSubscriptionPayload {
  mutation: MutationType!
  node: Business
  updatedFields: [String!]
  previousValues: BusinessPreviousValues
}

input BusinessSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BusinessWhereInput
  AND: [BusinessSubscriptionWhereInput!]
  OR: [BusinessSubscriptionWhereInput!]
  NOT: [BusinessSubscriptionWhereInput!]
}

type BusinessType {
  id: ID!
  name: String!
  description: String
  businesses(where: BusinessWhereInput, orderBy: BusinessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Business!]
}

type BusinessTypeConnection {
  pageInfo: PageInfo!
  edges: [BusinessTypeEdge]!
  aggregate: AggregateBusinessType!
}

input BusinessTypeCreateInput {
  name: String!
  description: String
  businesses: BusinessCreateManyWithoutTypeInput
}

input BusinessTypeCreateOneWithoutBusinessesInput {
  create: BusinessTypeCreateWithoutBusinessesInput
  connect: BusinessTypeWhereUniqueInput
}

input BusinessTypeCreateWithoutBusinessesInput {
  name: String!
  description: String
}

type BusinessTypeEdge {
  node: BusinessType!
  cursor: String!
}

enum BusinessTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BusinessTypePreviousValues {
  id: ID!
  name: String!
  description: String
}

type BusinessTypeSubscriptionPayload {
  mutation: MutationType!
  node: BusinessType
  updatedFields: [String!]
  previousValues: BusinessTypePreviousValues
}

input BusinessTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BusinessTypeWhereInput
  AND: [BusinessTypeSubscriptionWhereInput!]
  OR: [BusinessTypeSubscriptionWhereInput!]
  NOT: [BusinessTypeSubscriptionWhereInput!]
}

input BusinessTypeUpdateInput {
  name: String
  description: String
  businesses: BusinessUpdateManyWithoutTypeInput
}

input BusinessTypeUpdateManyMutationInput {
  name: String
  description: String
}

input BusinessTypeUpdateOneRequiredWithoutBusinessesInput {
  create: BusinessTypeCreateWithoutBusinessesInput
  update: BusinessTypeUpdateWithoutBusinessesDataInput
  upsert: BusinessTypeUpsertWithoutBusinessesInput
  connect: BusinessTypeWhereUniqueInput
}

input BusinessTypeUpdateWithoutBusinessesDataInput {
  name: String
  description: String
}

input BusinessTypeUpsertWithoutBusinessesInput {
  update: BusinessTypeUpdateWithoutBusinessesDataInput!
  create: BusinessTypeCreateWithoutBusinessesInput!
}

input BusinessTypeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  businesses_every: BusinessWhereInput
  businesses_some: BusinessWhereInput
  businesses_none: BusinessWhereInput
  AND: [BusinessTypeWhereInput!]
  OR: [BusinessTypeWhereInput!]
  NOT: [BusinessTypeWhereInput!]
}

input BusinessTypeWhereUniqueInput {
  id: ID
}

input BusinessUpdateInput {
  name: String
  type: BusinessTypeUpdateOneRequiredWithoutBusinessesInput
  isVerified: Boolean
  gstNumber: String
  bills: BillUpdateManyWithoutBillerInput
}

input BusinessUpdateManyDataInput {
  name: String
  isVerified: Boolean
  gstNumber: String
}

input BusinessUpdateManyMutationInput {
  name: String
  isVerified: Boolean
  gstNumber: String
}

input BusinessUpdateManyWithoutTypeInput {
  create: [BusinessCreateWithoutTypeInput!]
  delete: [BusinessWhereUniqueInput!]
  connect: [BusinessWhereUniqueInput!]
  disconnect: [BusinessWhereUniqueInput!]
  update: [BusinessUpdateWithWhereUniqueWithoutTypeInput!]
  upsert: [BusinessUpsertWithWhereUniqueWithoutTypeInput!]
  deleteMany: [BusinessScalarWhereInput!]
  updateMany: [BusinessUpdateManyWithWhereNestedInput!]
}

input BusinessUpdateManyWithWhereNestedInput {
  where: BusinessScalarWhereInput!
  data: BusinessUpdateManyDataInput!
}

input BusinessUpdateOneRequiredWithoutBillsInput {
  create: BusinessCreateWithoutBillsInput
  update: BusinessUpdateWithoutBillsDataInput
  upsert: BusinessUpsertWithoutBillsInput
  connect: BusinessWhereUniqueInput
}

input BusinessUpdateWithoutBillsDataInput {
  name: String
  type: BusinessTypeUpdateOneRequiredWithoutBusinessesInput
  isVerified: Boolean
  gstNumber: String
}

input BusinessUpdateWithoutTypeDataInput {
  name: String
  isVerified: Boolean
  gstNumber: String
  bills: BillUpdateManyWithoutBillerInput
}

input BusinessUpdateWithWhereUniqueWithoutTypeInput {
  where: BusinessWhereUniqueInput!
  data: BusinessUpdateWithoutTypeDataInput!
}

input BusinessUpsertWithoutBillsInput {
  update: BusinessUpdateWithoutBillsDataInput!
  create: BusinessCreateWithoutBillsInput!
}

input BusinessUpsertWithWhereUniqueWithoutTypeInput {
  where: BusinessWhereUniqueInput!
  update: BusinessUpdateWithoutTypeDataInput!
  create: BusinessCreateWithoutTypeInput!
}

input BusinessWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  type: BusinessTypeWhereInput
  isVerified: Boolean
  isVerified_not: Boolean
  gstNumber: String
  gstNumber_not: String
  gstNumber_in: [String!]
  gstNumber_not_in: [String!]
  gstNumber_lt: String
  gstNumber_lte: String
  gstNumber_gt: String
  gstNumber_gte: String
  gstNumber_contains: String
  gstNumber_not_contains: String
  gstNumber_starts_with: String
  gstNumber_not_starts_with: String
  gstNumber_ends_with: String
  gstNumber_not_ends_with: String
  bills_every: BillWhereInput
  bills_some: BillWhereInput
  bills_none: BillWhereInput
  AND: [BusinessWhereInput!]
  OR: [BusinessWhereInput!]
  NOT: [BusinessWhereInput!]
}

input BusinessWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBill(data: BillCreateInput!): Bill!
  updateBill(data: BillUpdateInput!, where: BillWhereUniqueInput!): Bill
  updateManyBills(data: BillUpdateManyMutationInput!, where: BillWhereInput): BatchPayload!
  upsertBill(where: BillWhereUniqueInput!, create: BillCreateInput!, update: BillUpdateInput!): Bill!
  deleteBill(where: BillWhereUniqueInput!): Bill
  deleteManyBills(where: BillWhereInput): BatchPayload!
  createBusiness(data: BusinessCreateInput!): Business!
  updateBusiness(data: BusinessUpdateInput!, where: BusinessWhereUniqueInput!): Business
  updateManyBusinesses(data: BusinessUpdateManyMutationInput!, where: BusinessWhereInput): BatchPayload!
  upsertBusiness(where: BusinessWhereUniqueInput!, create: BusinessCreateInput!, update: BusinessUpdateInput!): Business!
  deleteBusiness(where: BusinessWhereUniqueInput!): Business
  deleteManyBusinesses(where: BusinessWhereInput): BatchPayload!
  createBusinessType(data: BusinessTypeCreateInput!): BusinessType!
  updateBusinessType(data: BusinessTypeUpdateInput!, where: BusinessTypeWhereUniqueInput!): BusinessType
  updateManyBusinessTypes(data: BusinessTypeUpdateManyMutationInput!, where: BusinessTypeWhereInput): BatchPayload!
  upsertBusinessType(where: BusinessTypeWhereUniqueInput!, create: BusinessTypeCreateInput!, update: BusinessTypeUpdateInput!): BusinessType!
  deleteBusinessType(where: BusinessTypeWhereUniqueInput!): BusinessType
  deleteManyBusinessTypes(where: BusinessTypeWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createProductCatalog(data: ProductCatalogCreateInput!): ProductCatalog!
  updateProductCatalog(data: ProductCatalogUpdateInput!, where: ProductCatalogWhereUniqueInput!): ProductCatalog
  updateManyProductCatalogs(data: ProductCatalogUpdateManyMutationInput!, where: ProductCatalogWhereInput): BatchPayload!
  upsertProductCatalog(where: ProductCatalogWhereUniqueInput!, create: ProductCatalogCreateInput!, update: ProductCatalogUpdateInput!): ProductCatalog!
  deleteProductCatalog(where: ProductCatalogWhereUniqueInput!): ProductCatalog
  deleteManyProductCatalogs(where: ProductCatalogWhereInput): BatchPayload!
  createRole(data: RoleCreateInput!): Role!
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateManyRoles(data: RoleUpdateManyMutationInput!, where: RoleWhereInput): BatchPayload!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserBusiness(data: UserBusinessCreateInput!): UserBusiness!
  updateUserBusiness(data: UserBusinessUpdateInput!, where: UserBusinessWhereUniqueInput!): UserBusiness
  updateManyUserBusinesses(data: UserBusinessUpdateManyMutationInput!, where: UserBusinessWhereInput): BatchPayload!
  upsertUserBusiness(where: UserBusinessWhereUniqueInput!, create: UserBusinessCreateInput!, update: UserBusinessUpdateInput!): UserBusiness!
  deleteUserBusiness(where: UserBusinessWhereUniqueInput!): UserBusiness
  deleteManyUserBusinesses(where: UserBusinessWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  name: String!
  quantity: Int!
  unit: String!
  price: Float!
  bill: Bill!
}

type ProductCatalog {
  id: ID!
  name: String!
  description: String
  unit: String!
  price: Float!
}

type ProductCatalogConnection {
  pageInfo: PageInfo!
  edges: [ProductCatalogEdge]!
  aggregate: AggregateProductCatalog!
}

input ProductCatalogCreateInput {
  name: String!
  description: String
  unit: String!
  price: Float!
}

type ProductCatalogEdge {
  node: ProductCatalog!
  cursor: String!
}

enum ProductCatalogOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  unit_ASC
  unit_DESC
  price_ASC
  price_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductCatalogPreviousValues {
  id: ID!
  name: String!
  description: String
  unit: String!
  price: Float!
}

type ProductCatalogSubscriptionPayload {
  mutation: MutationType!
  node: ProductCatalog
  updatedFields: [String!]
  previousValues: ProductCatalogPreviousValues
}

input ProductCatalogSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductCatalogWhereInput
  AND: [ProductCatalogSubscriptionWhereInput!]
  OR: [ProductCatalogSubscriptionWhereInput!]
  NOT: [ProductCatalogSubscriptionWhereInput!]
}

input ProductCatalogUpdateInput {
  name: String
  description: String
  unit: String
  price: Float
}

input ProductCatalogUpdateManyMutationInput {
  name: String
  description: String
  unit: String
  price: Float
}

input ProductCatalogWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  unit: String
  unit_not: String
  unit_in: [String!]
  unit_not_in: [String!]
  unit_lt: String
  unit_lte: String
  unit_gt: String
  unit_gte: String
  unit_contains: String
  unit_not_contains: String
  unit_starts_with: String
  unit_not_starts_with: String
  unit_ends_with: String
  unit_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  AND: [ProductCatalogWhereInput!]
  OR: [ProductCatalogWhereInput!]
  NOT: [ProductCatalogWhereInput!]
}

input ProductCatalogWhereUniqueInput {
  id: ID
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String!
  quantity: Int!
  unit: String!
  price: Float!
  bill: BillCreateOneWithoutCartInput!
}

input ProductCreateManyWithoutBillInput {
  create: [ProductCreateWithoutBillInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateWithoutBillInput {
  name: String!
  quantity: Int!
  unit: String!
  price: Float!
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  quantity_ASC
  quantity_DESC
  unit_ASC
  unit_DESC
  price_ASC
  price_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  quantity: Int!
  unit: String!
  price: Float!
}

input ProductScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  unit: String
  unit_not: String
  unit_in: [String!]
  unit_not_in: [String!]
  unit_lt: String
  unit_lte: String
  unit_gt: String
  unit_gte: String
  unit_contains: String
  unit_not_contains: String
  unit_starts_with: String
  unit_not_starts_with: String
  unit_ends_with: String
  unit_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  AND: [ProductScalarWhereInput!]
  OR: [ProductScalarWhereInput!]
  NOT: [ProductScalarWhereInput!]
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateInput {
  name: String
  quantity: Int
  unit: String
  price: Float
  bill: BillUpdateOneRequiredWithoutCartInput
}

input ProductUpdateManyDataInput {
  name: String
  quantity: Int
  unit: String
  price: Float
}

input ProductUpdateManyMutationInput {
  name: String
  quantity: Int
  unit: String
  price: Float
}

input ProductUpdateManyWithoutBillInput {
  create: [ProductCreateWithoutBillInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutBillInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutBillInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdateWithoutBillDataInput {
  name: String
  quantity: Int
  unit: String
  price: Float
}

input ProductUpdateWithWhereUniqueWithoutBillInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutBillDataInput!
}

input ProductUpsertWithWhereUniqueWithoutBillInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutBillDataInput!
  create: ProductCreateWithoutBillInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  unit: String
  unit_not: String
  unit_in: [String!]
  unit_not_in: [String!]
  unit_lt: String
  unit_lte: String
  unit_gt: String
  unit_gte: String
  unit_contains: String
  unit_not_contains: String
  unit_starts_with: String
  unit_not_starts_with: String
  unit_ends_with: String
  unit_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  bill: BillWhereInput
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  bill(where: BillWhereUniqueInput!): Bill
  bills(where: BillWhereInput, orderBy: BillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bill]!
  billsConnection(where: BillWhereInput, orderBy: BillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BillConnection!
  business(where: BusinessWhereUniqueInput!): Business
  businesses(where: BusinessWhereInput, orderBy: BusinessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Business]!
  businessesConnection(where: BusinessWhereInput, orderBy: BusinessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BusinessConnection!
  businessType(where: BusinessTypeWhereUniqueInput!): BusinessType
  businessTypes(where: BusinessTypeWhereInput, orderBy: BusinessTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BusinessType]!
  businessTypesConnection(where: BusinessTypeWhereInput, orderBy: BusinessTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BusinessTypeConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  productCatalog(where: ProductCatalogWhereUniqueInput!): ProductCatalog
  productCatalogs(where: ProductCatalogWhereInput, orderBy: ProductCatalogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductCatalog]!
  productCatalogsConnection(where: ProductCatalogWhereInput, orderBy: ProductCatalogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductCatalogConnection!
  role(where: RoleWhereUniqueInput!): Role
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userBusiness(where: UserBusinessWhereUniqueInput!): UserBusiness
  userBusinesses(where: UserBusinessWhereInput, orderBy: UserBusinessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserBusiness]!
  userBusinessesConnection(where: UserBusinessWhereInput, orderBy: UserBusinessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserBusinessConnection!
  node(id: ID!): Node
}

type Role {
  id: ID!
  name: String!
  description: String
}

type RoleConnection {
  pageInfo: PageInfo!
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  name: String!
  description: String
}

type RoleEdge {
  node: Role!
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RolePreviousValues {
  id: ID!
  name: String!
  description: String
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
  AND: [RoleSubscriptionWhereInput!]
  OR: [RoleSubscriptionWhereInput!]
  NOT: [RoleSubscriptionWhereInput!]
}

input RoleUpdateInput {
  name: String
  description: String
}

input RoleUpdateManyMutationInput {
  name: String
  description: String
}

input RoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [RoleWhereInput!]
  OR: [RoleWhereInput!]
  NOT: [RoleWhereInput!]
}

input RoleWhereUniqueInput {
  id: ID
}

type Subscription {
  bill(where: BillSubscriptionWhereInput): BillSubscriptionPayload
  business(where: BusinessSubscriptionWhereInput): BusinessSubscriptionPayload
  businessType(where: BusinessTypeSubscriptionWhereInput): BusinessTypeSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  productCatalog(where: ProductCatalogSubscriptionWhereInput): ProductCatalogSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userBusiness(where: UserBusinessSubscriptionWhereInput): UserBusinessSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  vpa: String
  tel: String
  bills(where: BillWhereInput, orderBy: BillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bill!]
}

type UserBusiness {
  id: ID!
  userId: ID!
  businessId: ID!
  roleId: ID!
  startDate: String
  endDate: String
}

type UserBusinessConnection {
  pageInfo: PageInfo!
  edges: [UserBusinessEdge]!
  aggregate: AggregateUserBusiness!
}

input UserBusinessCreateInput {
  userId: ID!
  businessId: ID!
  roleId: ID!
  startDate: String
  endDate: String
}

type UserBusinessEdge {
  node: UserBusiness!
  cursor: String!
}

enum UserBusinessOrderByInput {
  id_ASC
  id_DESC
  userId_ASC
  userId_DESC
  businessId_ASC
  businessId_DESC
  roleId_ASC
  roleId_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserBusinessPreviousValues {
  id: ID!
  userId: ID!
  businessId: ID!
  roleId: ID!
  startDate: String
  endDate: String
}

type UserBusinessSubscriptionPayload {
  mutation: MutationType!
  node: UserBusiness
  updatedFields: [String!]
  previousValues: UserBusinessPreviousValues
}

input UserBusinessSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserBusinessWhereInput
  AND: [UserBusinessSubscriptionWhereInput!]
  OR: [UserBusinessSubscriptionWhereInput!]
  NOT: [UserBusinessSubscriptionWhereInput!]
}

input UserBusinessUpdateInput {
  userId: ID
  businessId: ID
  roleId: ID
  startDate: String
  endDate: String
}

input UserBusinessUpdateManyMutationInput {
  userId: ID
  businessId: ID
  roleId: ID
  startDate: String
  endDate: String
}

input UserBusinessWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userId: ID
  userId_not: ID
  userId_in: [ID!]
  userId_not_in: [ID!]
  userId_lt: ID
  userId_lte: ID
  userId_gt: ID
  userId_gte: ID
  userId_contains: ID
  userId_not_contains: ID
  userId_starts_with: ID
  userId_not_starts_with: ID
  userId_ends_with: ID
  userId_not_ends_with: ID
  businessId: ID
  businessId_not: ID
  businessId_in: [ID!]
  businessId_not_in: [ID!]
  businessId_lt: ID
  businessId_lte: ID
  businessId_gt: ID
  businessId_gte: ID
  businessId_contains: ID
  businessId_not_contains: ID
  businessId_starts_with: ID
  businessId_not_starts_with: ID
  businessId_ends_with: ID
  businessId_not_ends_with: ID
  roleId: ID
  roleId_not: ID
  roleId_in: [ID!]
  roleId_not_in: [ID!]
  roleId_lt: ID
  roleId_lte: ID
  roleId_gt: ID
  roleId_gte: ID
  roleId_contains: ID
  roleId_not_contains: ID
  roleId_starts_with: ID
  roleId_not_starts_with: ID
  roleId_ends_with: ID
  roleId_not_ends_with: ID
  startDate: String
  startDate_not: String
  startDate_in: [String!]
  startDate_not_in: [String!]
  startDate_lt: String
  startDate_lte: String
  startDate_gt: String
  startDate_gte: String
  startDate_contains: String
  startDate_not_contains: String
  startDate_starts_with: String
  startDate_not_starts_with: String
  startDate_ends_with: String
  startDate_not_ends_with: String
  endDate: String
  endDate_not: String
  endDate_in: [String!]
  endDate_not_in: [String!]
  endDate_lt: String
  endDate_lte: String
  endDate_gt: String
  endDate_gte: String
  endDate_contains: String
  endDate_not_contains: String
  endDate_starts_with: String
  endDate_not_starts_with: String
  endDate_ends_with: String
  endDate_not_ends_with: String
  AND: [UserBusinessWhereInput!]
  OR: [UserBusinessWhereInput!]
  NOT: [UserBusinessWhereInput!]
}

input UserBusinessWhereUniqueInput {
  id: ID
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  vpa: String
  tel: String
  bills: BillCreateManyWithoutPayeeInput
}

input UserCreateOneWithoutBillsInput {
  create: UserCreateWithoutBillsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBillsInput {
  name: String!
  email: String!
  password: String!
  vpa: String
  tel: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  vpa_ASC
  vpa_DESC
  tel_ASC
  tel_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  vpa: String
  tel: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  vpa: String
  tel: String
  bills: BillUpdateManyWithoutPayeeInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  vpa: String
  tel: String
}

input UserUpdateOneRequiredWithoutBillsInput {
  create: UserCreateWithoutBillsInput
  update: UserUpdateWithoutBillsDataInput
  upsert: UserUpsertWithoutBillsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBillsDataInput {
  name: String
  email: String
  password: String
  vpa: String
  tel: String
}

input UserUpsertWithoutBillsInput {
  update: UserUpdateWithoutBillsDataInput!
  create: UserCreateWithoutBillsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  vpa: String
  vpa_not: String
  vpa_in: [String!]
  vpa_not_in: [String!]
  vpa_lt: String
  vpa_lte: String
  vpa_gt: String
  vpa_gte: String
  vpa_contains: String
  vpa_not_contains: String
  vpa_starts_with: String
  vpa_not_starts_with: String
  vpa_ends_with: String
  vpa_not_ends_with: String
  tel: String
  tel_not: String
  tel_in: [String!]
  tel_not_in: [String!]
  tel_lt: String
  tel_lte: String
  tel_gt: String
  tel_gte: String
  tel_contains: String
  tel_not_contains: String
  tel_starts_with: String
  tel_not_starts_with: String
  tel_ends_with: String
  tel_not_ends_with: String
  bills_every: BillWhereInput
  bills_some: BillWhereInput
  bills_none: BillWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    