import type { FindCardItems } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CardItems from 'src/components/CardItem/CardItems'

export const QUERY = gql`
  query FindCardItems {
    cardItems {
      id
      title
      description
      createdAt
      published
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No cardItems yet. '}
      <Link to={routes.newCardItem()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ cardItems }: CellSuccessProps<FindCardItems>) => {
  return <CardItems cardItems={cardItems} />
}
