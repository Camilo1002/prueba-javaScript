import React from "react";

const InputRadio = ({ radioOpciones, name, estado, setEstado }) => {
  const onChanges = (e) => {
    setEstado({...estado, campo: e.target.value})
  };

  return (
    <div>
      {(radioOpciones || []).map((radio) => {
        return (
          <div key={radio.id}>
            <label htmlFor={radio.id}>
              {radio.texto}
              <input
                
                type="radio"
                id={radio.id}
                name={name}
                value={radio.value}
                onChange={onChanges}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default InputRadio;
