import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/CardItem/CardItemsCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteCardItemMutationVariables,
  FindCardItems,
} from 'types/graphql'

const DELETE_CARD_ITEM_MUTATION = gql`
  mutation DeleteCardItemMutation($id: String!) {
    deleteCardItem(id: $id) {
      id
    }
  }
`

const CardItemsList = ({ cardItems }: FindCardItems) => {
  const [deleteCardItem] = useMutation(DELETE_CARD_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('CardItem deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteCardItemMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete cardItem ' + id + '?')) {
      deleteCardItem({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created at</th>
            <th>Published</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cardItems.map((cardItem) => (
            <tr key={cardItem.id}>
              <td>{truncate(cardItem.id)}</td>
              <td>{truncate(cardItem.title)}</td>
              <td>{truncate(cardItem.description)}</td>
              <td>{timeTag(cardItem.createdAt)}</td>
              <td>{checkboxInputTag(cardItem.published)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.cardItem({ id: cardItem.id })}
                    title={'Show cardItem ' + cardItem.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCardItem({ id: cardItem.id })}
                    title={'Edit cardItem ' + cardItem.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete cardItem ' + cardItem.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(cardItem.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CardItemsList
