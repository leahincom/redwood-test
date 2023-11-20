import type { FindCardItemsInCategories } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CardItemsInCategories from 'src/components/CardItemsInCategory/CardItemsInCategories'

export const QUERY = gql`
  query FindCardItemsInCategories {
    cardItemsInCategories {
      id
      cardItemId
      categoryId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No cardItemsInCategories yet. '}
      <Link to={routes.newCardItemsInCategory()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  cardItemsInCategories,
}: CellSuccessProps<FindCardItemsInCategories>) => {
  return <CardItemsInCategories cardItemsInCategories={cardItemsInCategories} />
}
