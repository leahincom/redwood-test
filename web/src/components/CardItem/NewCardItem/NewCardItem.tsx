import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CardItemForm from 'src/components/CardItem/CardItemForm'

import type { CreateCardItemInput } from 'types/graphql'

const CREATE_CARD_ITEM_MUTATION = gql`
  mutation CreateCardItemMutation($input: CreateCardItemInput!) {
    createCardItem(input: $input) {
      id
    }
  }
`

const NewCardItem = () => {
  const [createCardItem, { loading, error }] = useMutation(
    CREATE_CARD_ITEM_MUTATION,
    {
      onCompleted: () => {
        toast.success('CardItem created')
        navigate(routes.cardItems())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCardItemInput) => {
    createCardItem({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CardItem</h2>
      </header>
      <div className="rw-segment-main">
        <CardItemForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCardItem
