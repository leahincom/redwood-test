import type { FindCardItemById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CardItem from 'src/components/CardItem/CardItem'

export const QUERY = gql`
  query FindCardItemById($id: String!) {
    cardItem: cardItem(id: $id) {
      id
      title
      description
      createdAt
      published
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CardItem not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ cardItem }: CellSuccessProps<FindCardItemById>) => {
  return <CardItem cardItem={cardItem} />
}
