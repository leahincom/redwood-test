import type {
  EditCardItemsInCategoryById,
  UpdateCardItemsInCategoryInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CardItemsInCategoryForm from 'src/components/CardItemsInCategory/CardItemsInCategoryForm'

export const QUERY = gql`
  query EditCardItemsInCategoryById($id: String!) {
    cardItemsInCategory: cardItemsInCategory(id: $id) {
      id
      cardItemId
      categoryId
    }
  }
`
const UPDATE_CARD_ITEMS_IN_CATEGORY_MUTATION = gql`
  mutation UpdateCardItemsInCategoryMutation(
    $id: String!
    $input: UpdateCardItemsInCategoryInput!
  ) {
    updateCardItemsInCategory(id: $id, input: $input) {
      id
      cardItemId
      categoryId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  cardItemsInCategory,
}: CellSuccessProps<EditCardItemsInCategoryById>) => {
  const [updateCardItemsInCategory, { loading, error }] = useMutation(
    UPDATE_CARD_ITEMS_IN_CATEGORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('CardItemsInCategory updated')
        navigate(routes.cardItemsInCategories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCardItemsInCategoryInput,
    id: EditCardItemsInCategoryById['cardItemsInCategory']['id']
  ) => {
    updateCardItemsInCategory({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CardItemsInCategory {cardItemsInCategory?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CardItemsInCategoryForm
          cardItemsInCategory={cardItemsInCategory}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
