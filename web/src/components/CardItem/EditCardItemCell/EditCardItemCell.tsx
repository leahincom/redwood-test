import type { EditCardItemById, UpdateCardItemInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CardItemForm from 'src/components/CardItem/CardItemForm'

export const QUERY = gql`
  query EditCardItemById($id: String!) {
    cardItem: cardItem(id: $id) {
      id
      title
      description
      createdAt
      published
    }
  }
`
const UPDATE_CARD_ITEM_MUTATION = gql`
  mutation UpdateCardItemMutation($id: String!, $input: UpdateCardItemInput!) {
    updateCardItem(id: $id, input: $input) {
      id
      title
      description
      createdAt
      published
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ cardItem }: CellSuccessProps<EditCardItemById>) => {
  const [updateCardItem, { loading, error }] = useMutation(
    UPDATE_CARD_ITEM_MUTATION,
    {
      onCompleted: () => {
        toast.success('CardItem updated')
        navigate(routes.cardItems())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCardItemInput,
    id: EditCardItemById['cardItem']['id']
  ) => {
    updateCardItem({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CardItem {cardItem?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CardItemForm
          cardItem={cardItem}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
