import React from "react";
import { Select } from "../elements-form/formularios";


//COMPONENTE PARA LOS CAMPOS LISTA

const SelectInput = ({ selectOpciones, id, name, estado, setEstado }) => {
  const onChanges = (e) => {
    setEstado({ ...estado, campo: e.target.value });
  };

  return (
    <div>
      <Select defaultValue={""} name={name} id={id} onChange={onChanges}>
        <option disabled value="">Seleccione</option>
        {selectOpciones.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectInput;
