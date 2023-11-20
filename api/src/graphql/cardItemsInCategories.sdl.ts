export const schema = gql`
  type CardItemsInCategory {
    id: String!
    cardItemId: String!
    cardItem: CardItem!
    categoryId: String!
    category: Category!
  }

  type Query {
    cardItemsInCategories: [CardItemsInCategory!]! @requireAuth
    cardItemsInCategory(id: String!): CardItemsInCategory @requireAuth
  }

  input CreateCardItemsInCategoryInput {
    cardItemId: String!
    categoryId: String!
  }

  input UpdateCardItemsInCategoryInput {
    cardItemId: String
    categoryId: String
  }

  type Mutation {
    createCardItemsInCategory(
      input: CreateCardItemsInCategoryInput!
    ): CardItemsInCategory! @requireAuth
    updateCardItemsInCategory(
      id: String!
      input: UpdateCardItemsInCategoryInput!
    ): CardItemsInCategory! @requireAuth
    deleteCardItemsInCategory(id: String!): CardItemsInCategory! @requireAuth
  }
`
