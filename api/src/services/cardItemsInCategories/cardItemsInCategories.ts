import type {
  QueryResolvers,
  MutationResolvers,
  CardItemsInCategoryRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const cardItemsInCategories: QueryResolvers['cardItemsInCategories'] =
  () => {
    return db.cardItemsInCategory.findMany()
  }

export const cardItemsInCategory: QueryResolvers['cardItemsInCategory'] = ({
  id,
}) => {
  return db.cardItemsInCategory.findUnique({
    where: { id },
  })
}

export const createCardItemsInCategory: MutationResolvers['createCardItemsInCategory'] =
  ({ input }) => {
    return db.cardItemsInCategory.create({
      data: input,
    })
  }

export const updateCardItemsInCategory: MutationResolvers['updateCardItemsInCategory'] =
  ({ id, input }) => {
    return db.cardItemsInCategory.update({
      data: input,
      where: { id },
    })
  }

export const deleteCardItemsInCategory: MutationResolvers['deleteCardItemsInCategory'] =
  ({ id }) => {
    return db.cardItemsInCategory.delete({
      where: { id },
    })
  }

export const CardItemsInCategory: CardItemsInCategoryRelationResolvers = {
  cardItem: (_obj, { root }) => {
    return db.cardItemsInCategory
      .findUnique({ where: { id: root?.id } })
      .cardItem()
  },
  category: (_obj, { root }) => {
    return db.cardItemsInCategory
      .findUnique({ where: { id: root?.id } })
      .category()
  },
}
