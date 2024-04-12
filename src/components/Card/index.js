const Card = props => {
  const {listData} = props
  const {name, imageUrl, description} = listData
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default Card
