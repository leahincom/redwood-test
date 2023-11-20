import type { FindCardItemsInCategoryById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CardItemsInCategory from 'src/components/CardItemsInCategory/CardItemsInCategory'

export const QUERY = gql`
  query FindCardItemsInCategoryById($id: String!) {
    cardItemsInCategory: cardItemsInCategory(id: $id) {
      id
      cardItemId
      categoryId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CardItemsInCategory not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  cardItemsInCategory,
}: CellSuccessProps<FindCardItemsInCategoryById>) => {
  return <CardItemsInCategory cardItemsInCategory={cardItemsInCategory} />
}
