import CardItemsInCategoryCell from 'src/components/CardItemsInCategory/CardItemsInCategoryCell'

type CardItemsInCategoryPageProps = {
  id: string
}

const CardItemsInCategoryPage = ({ id }: CardItemsInCategoryPageProps) => {
  return <CardItemsInCategoryCell id={id} />
}

export default CardItemsInCategoryPage
