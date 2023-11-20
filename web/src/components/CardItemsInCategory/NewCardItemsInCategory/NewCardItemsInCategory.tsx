import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CardItemsInCategoryForm from 'src/components/CardItemsInCategory/CardItemsInCategoryForm'

import type { CreateCardItemsInCategoryInput } from 'types/graphql'

const CREATE_CARD_ITEMS_IN_CATEGORY_MUTATION = gql`
  mutation CreateCardItemsInCategoryMutation(
    $input: CreateCardItemsInCategoryInput!
  ) {
    createCardItemsInCategory(input: $input) {
      id
    }
  }
`

const NewCardItemsInCategory = () => {
  const [createCardItemsInCategory, { loading, error }] = useMutation(
    CREATE_CARD_ITEMS_IN_CATEGORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('CardItemsInCategory created')
        navigate(routes.cardItemsInCategories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCardItemsInCategoryInput) => {
    createCardItemsInCategory({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New CardItemsInCategory
        </h2>
      </header>
      <div className="rw-segment-main">
        <CardItemsInCategoryForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewCardItemsInCategory
