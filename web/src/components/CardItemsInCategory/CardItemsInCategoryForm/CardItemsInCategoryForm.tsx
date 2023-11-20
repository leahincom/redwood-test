import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditCardItemsInCategoryById,
  UpdateCardItemsInCategoryInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormCardItemsInCategory = NonNullable<
  EditCardItemsInCategoryById['cardItemsInCategory']
>

interface CardItemsInCategoryFormProps {
  cardItemsInCategory?: EditCardItemsInCategoryById['cardItemsInCategory']
  onSave: (
    data: UpdateCardItemsInCategoryInput,
    id?: FormCardItemsInCategory['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const CardItemsInCategoryForm = (props: CardItemsInCategoryFormProps) => {
  const onSubmit = (data: FormCardItemsInCategory) => {
    props.onSave(data, props?.cardItemsInCategory?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCardItemsInCategory> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="cardItemId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Card item id
        </Label>

        <TextField
          name="cardItemId"
          defaultValue={props.cardItemsInCategory?.cardItemId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="cardItemId" className="rw-field-error" />

        <Label
          name="categoryId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category id
        </Label>

        <TextField
          name="categoryId"
          defaultValue={props.cardItemsInCategory?.categoryId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="categoryId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CardItemsInCategoryForm
