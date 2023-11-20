import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteCardItemsInCategoryMutationVariables,
  FindCardItemsInCategoryById,
} from 'types/graphql'

const DELETE_CARD_ITEMS_IN_CATEGORY_MUTATION = gql`
  mutation DeleteCardItemsInCategoryMutation($id: String!) {
    deleteCardItemsInCategory(id: $id) {
      id
    }
  }
`

interface Props {
  cardItemsInCategory: NonNullable<
    FindCardItemsInCategoryById['cardItemsInCategory']
  >
}

const CardItemsInCategory = ({ cardItemsInCategory }: Props) => {
  const [deleteCardItemsInCategory] = useMutation(
    DELETE_CARD_ITEMS_IN_CATEGORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('CardItemsInCategory deleted')
        navigate(routes.cardItemsInCategories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteCardItemsInCategoryMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete cardItemsInCategory ' + id + '?')
    ) {
      deleteCardItemsInCategory({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CardItemsInCategory {cardItemsInCategory.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{cardItemsInCategory.id}</td>
            </tr>
            <tr>
              <th>Card item id</th>
              <td>{cardItemsInCategory.cardItemId}</td>
            </tr>
            <tr>
              <th>Category id</th>
              <td>{cardItemsInCategory.categoryId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCardItemsInCategory({ id: cardItemsInCategory.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(cardItemsInCategory.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CardItemsInCategory
