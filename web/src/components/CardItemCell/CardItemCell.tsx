import { Card, Image, View, Text } from 'reshaped'
import type {
  FindCardItemQuery,
  FindCardItemQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCardItemQuery($id: String!) {
    cardItem: cardItem(id: $id) {
      id
      title
      colors {
        name
      }
      price
      createdAt
      image
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCardItemQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  cardItem,
}: CellSuccessProps<FindCardItemQuery, FindCardItemQueryVariables>) => {
  return (
    <Card className="bg-slate-400 font-sans">
      <View>
        <Text>{cardItem.title}</Text>
        <Text>컬러 {cardItem.colors.length}</Text>
        <Text>{cardItem.price}</Text>
      </View>
      <View>
        <Image src={cardItem.image} />
      </View>
    </Card>
  )
}
