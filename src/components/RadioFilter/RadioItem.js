export const RadioItem = ({handlerChangeRadio,value,name}) => {
  return (
    <div className="productList__types__radioItem">
    <input
      type="radio"
      name="type"
      value={value}
      onChange={handlerChangeRadio}
    />
    &nbsp;
    <h4>{name}</h4>
  </div>
  )
}
