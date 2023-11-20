export const schema = gql`
  type CardItem {
    id: String!
    title: String!
    description: String!
    colors: [Color]!
    price: String!
    createdAt: DateTime!
    published: Boolean!
    categories: [CardItemsInCategory]!
    image: String!
  }

  type Query {
    cardItems: [CardItem!]! @requireAuth
    cardItem(id: String!): CardItem @requireAuth
  }

  input CreateCardItemInput {
    title: String!
    description: String!
    published: Boolean!
  }

  input UpdateCardItemInput {
    title: String
    description: String
    published: Boolean
  }

  type Mutation {
    createCardItem(input: CreateCardItemInput!): CardItem! @requireAuth
    updateCardItem(id: String!, input: UpdateCardItemInput!): CardItem!
      @requireAuth
    deleteCardItem(id: String!): CardItem! @requireAuth
  }
`
