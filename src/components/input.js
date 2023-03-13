import React from "react";
import {
  Label,
  Input,
  GrupoInput,
  MensajeError,
} from "../elements-form/formularios";

//COMPONENTE PARA LOS CAMPO DE FORMULARIO TIPO INPUT

const ComponenteInput = ({
  estado,
  setEstado,
  tipo,
  label,
  placeholder,
  id,
  name,
  mensajeError,
  expresionRegular,
}) => {
  const onChange = (e) => {
    setEstado({ ...estado, campo: e.target.value });
  };

//VALIDACION DE CAMPOS

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        setEstado({ ...estado, valido: "true" });
      } else {
        setEstado({ ...estado, valido: "false" });
      }
    }
  };

  return (
    <div>
      <Label htmlFor={id} valido={estado.valido}>
        {" "}
        {label}{" "}
      </Label>
      <GrupoInput>
        <Input
          type={tipo}
          placeholder={placeholder}
          id={id}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
          name={name}
        />
      </GrupoInput>
      <MensajeError valido={estado.valido}> {mensajeError} </MensajeError>
    </div>
  );
};

export default ComponenteInput;
