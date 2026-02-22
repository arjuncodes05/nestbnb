import Title from '../../components/Title'

const AddRoom = () => {

  const title = "Add Room";
  const subtitle = "Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience"

  return (
    <div>
      <Title title={title} subtitle={subtitle} align="start" />
    </div>
  )
}

export default AddRoom