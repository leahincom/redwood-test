import CardItemCell from 'src/components/CardItem/CardItemCell'

type CardItemPageProps = {
  id: string
}

const CardItemPage = ({ id }: CardItemPageProps) => {
  return <CardItemCell id={id} />
}

export default CardItemPage
