export const schema = gql`
  type Color {
    id: String!
    name: String!
    CardItem: CardItem
    cardItemId: String
  }

  type Query {
    colors: [Color!]! @requireAuth
    color(id: String!): Color @requireAuth
  }

  input CreateColorInput {
    name: String!
    cardItemId: String
  }

  input UpdateColorInput {
    name: String
    cardItemId: String
  }

  type Mutation {
    createColor(input: CreateColorInput!): Color! @requireAuth
    updateColor(id: String!, input: UpdateColorInput!): Color! @requireAuth
    deleteColor(id: String!): Color! @requireAuth
  }
`
