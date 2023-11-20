import EditCardItemCell from 'src/components/CardItem/EditCardItemCell'

type CardItemPageProps = {
  id: string
}

const EditCardItemPage = ({ id }: CardItemPageProps) => {
  return <EditCardItemCell id={id} />
}

export default EditCardItemPage
