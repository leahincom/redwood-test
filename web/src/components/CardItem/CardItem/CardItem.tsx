import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

import type {
  DeleteCardItemMutationVariables,
  FindCardItemById,
} from 'types/graphql'

const DELETE_CARD_ITEM_MUTATION = gql`
  mutation DeleteCardItemMutation($id: String!) {
    deleteCardItem(id: $id) {
      id
    }
  }
`

interface Props {
  cardItem: NonNullable<FindCardItemById['cardItem']>
}

const CardItem = ({ cardItem }: Props) => {
  const [deleteCardItem] = useMutation(DELETE_CARD_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('CardItem deleted')
      navigate(routes.cardItems())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCardItemMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete cardItem ' + id + '?')) {
      deleteCardItem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CardItem {cardItem.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{cardItem.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{cardItem.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{cardItem.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(cardItem.createdAt)}</td>
            </tr>
            <tr>
              <th>Published</th>
              <td>{checkboxInputTag(cardItem.published)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCardItem({ id: cardItem.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(cardItem.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CardItem
