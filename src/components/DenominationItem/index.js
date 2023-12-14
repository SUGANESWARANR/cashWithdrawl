const DenominationItem = props => {
  const {denominationsDetails} = props
  const {value} = denominationsDetails

  return (
    <li>
      <button type="button">{value}</button>
    </li>
  )
}

export default DenominationItem
