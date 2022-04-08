import { RadioItem } from "./RadioItem";

export const RadioFilter = ({ handlerChangeRadio }) => {
  
  return (
    <div className="productList__types">
      <h2>Mostrar</h2>
      <br />
      <div className="productList__types__radio">
        <RadioItem
          handlerChangeRadio={handlerChangeRadio}
          value={`All`}
          name={"Todo"}
        />
        <br />
        <RadioItem
          handlerChangeRadio={handlerChangeRadio}
          value={`Figure`}
          name={"Figura"}
        />
        <br />
        <RadioItem
          handlerChangeRadio={handlerChangeRadio}
          value={`Card`}
          name={"Carta"}
        />
        <br />
        <RadioItem
          handlerChangeRadio={handlerChangeRadio}
          value={`Yarn`}
          name={"Hilo"}
        />
      </div>
    </div>
  );
};
