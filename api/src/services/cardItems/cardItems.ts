import type {
  QueryResolvers,
  MutationResolvers,
  CardItemRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const cardItems: QueryResolvers['cardItems'] = () => {
  return db.cardItem.findMany()
}

export const cardItem: QueryResolvers['cardItem'] = ({ id }) => {
  return db.cardItem.findUnique({
    where: { id },
  })
}

export const createCardItem: MutationResolvers['createCardItem'] = ({
  input,
}) => {
  return db.cardItem.create({
    data: input,
  })
}

export const updateCardItem: MutationResolvers['updateCardItem'] = ({
  id,
  input,
}) => {
  return db.cardItem.update({
    data: input,
    where: { id },
  })
}

export const deleteCardItem: MutationResolvers['deleteCardItem'] = ({ id }) => {
  return db.cardItem.delete({
    where: { id },
  })
}

export const CardItem: CardItemRelationResolvers = {
  colors: (_obj, { root }) => {
    return db.cardItem.findUnique({ where: { id: root?.id } }).colors()
  },
  categories: (_obj, { root }) => {
    return db.cardItem.findUnique({ where: { id: root?.id } }).categories()
  },
}
