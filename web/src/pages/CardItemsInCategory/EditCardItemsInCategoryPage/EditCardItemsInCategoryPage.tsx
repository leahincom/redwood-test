import EditCardItemsInCategoryCell from 'src/components/CardItemsInCategory/EditCardItemsInCategoryCell'

type CardItemsInCategoryPageProps = {
  id: string
}

const EditCardItemsInCategoryPage = ({ id }: CardItemsInCategoryPageProps) => {
  return <EditCardItemsInCategoryCell id={id} />
}

export default EditCardItemsInCategoryPage
