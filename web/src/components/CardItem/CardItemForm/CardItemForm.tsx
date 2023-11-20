import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type { EditCardItemById, UpdateCardItemInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormCardItem = NonNullable<EditCardItemById['cardItem']>

interface CardItemFormProps {
  cardItem?: EditCardItemById['cardItem']
  onSave: (data: UpdateCardItemInput, id?: FormCardItem['id']) => void
  error: RWGqlError
  loading: boolean
}

const CardItemForm = (props: CardItemFormProps) => {
  const onSubmit = (data: FormCardItem) => {
    props.onSave(data, props?.cardItem?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCardItem> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.cardItem?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.cardItem?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="published"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Published
        </Label>

        <CheckboxField
          name="published"
          defaultChecked={props.cardItem?.published}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="published" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CardItemForm
