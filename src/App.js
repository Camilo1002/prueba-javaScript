import React, { useEffect, useState } from "react";
import {
  Formulario,
  AlertaError,
  ContenedorBoton,
  BotonEnviar,
  Label,
  Tabla,
  Header
} from "./elements-form/formularios";
import ComponenteInput from "./components/input.js";
import InputRadio from "./components/inputRadio";
import SelectInput from "./components/selectInput";

import { ciudadesPorDepartamento } from "./api/colombiaApi";

const App = () => {
  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [identificacion, setIdentificacion] = useState({campo: "", valido: null,});
  const [correo, setCorreo] = useState({ campo: "", valido: null });
  const [ciudad, setCiudad] = useState({ campo: "", valido: null });
  const [altura, setAltura] = useState({ campo: "", valido: null });
  const [peso, setPeso] = useState({ campo: "", valido: null });
  const [dolor, setDolor] = useState({ campo: "", valido: null });
  const [formularioValido, setFormularioValido] = useState(null);
  const [imc, setImc] = useState(0);
  const [valoracion, setValoracion] = useState("NO APTO");
  const [talla, setTalla] = useState({ campo: "", valido: null });
  const [ciudades, setCiudades] = useState([]);
  const [datos, setDatos] = useState([]);

  //FUNCIÓN QUE GUARDA LA CIUDADES

  const obtenerCiudades = async () => {
    const ciudades = await ciudadesPorDepartamento(2);
    const ciudadesOrdenadas = ciudades.sort((ciudadA, ciudadB) => {
      if (ciudadA.name < ciudadB.name) {
        return -1;
      } else {
        return 1;
      }
    });
    setCiudades(ciudadesOrdenadas);
  };

  useEffect(() => {
    obtenerCiudades();
  }, []);

  //HOOK PARA REALIZAR OPERACIONES DE CAMPOS CALCULADOS

  useEffect(() => {
    const resultadoIMC = (peso.campo / (altura.campo * altura.campo)).toFixed(2);
    setImc(resultadoIMC);
    let resultadoValoracion = "NO ACTO";
    if (imc >= 18.5 && imc <= 24.9 && dolor.campo === "false") {
      resultadoValoracion = "ACTO";
    }
    setValoracion(resultadoValoracion);
  }, [peso.campo, altura.campo, dolor.campo]);

  //EXPRESIONES REGULARES PARA VALIDACIONES

  const expresiones = {
    usuario: /^[a-zA-Z0-9]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{1,14}$/, // 7 a 14 numeros.
  };

  //EVENTO QUE GUARDARA DATOS Y REALIZARA ACCIONES CON EL BOTÓN ENVIAR

  const onSubmit = (e) => {
    e.preventDefault();

    if (nombre.valido === "true" && identificacion.valido === "true") {
      setFormularioValido(true);
      setNombre({ campo: "", valido: null });
      setIdentificacion({ campo: "", valido: null });
      setCorreo({ campo: "", valido: null });
      setAltura({ campo: "", valido: null });
      setPeso({ campo: "", valido: null });
      

      const nuevosDatos = [...datos];
      nuevosDatos.unshift({
        nombre: nombre.campo,
        identificacion: identificacion.campo,
        correo: correo.campo,
        ciudad: ciudad.campo,
        altura: altura.campo,
        peso: peso.campo,
        talla: talla.campo,
        imc: imc,
        dolor: dolor.campo === "true" ? "Sí" : "No",
        valoracion: valoracion,
      });
      setDatos(nuevosDatos);
    } else {
      setFormularioValido(false);
    }
  };

  // FUNCION PARA EL EVENTO DEL BOTON CANCELAR EL CUAL LIMPIA LOS CAMPOS

  const btnCancelar = (e) => {
    setNombre({ campo: "", valido: null });
    setIdentificacion({ campo: "", valido: null });
    setCorreo({ campo: "", valido: null });
    setAltura({ campo: "", valido: null });
    setPeso({ campo: "", valido: null });
  };

  //COMIENZO DE ESTRUCTURACIÓN MEDIANTE COMPONENTES

  return (
    <main>
      <Header>
        <div>
          <h3>MEDIA MARATÓN ABURRÁ DE LOS YAMESÍES</h3>
          <p>Rellene el formulario</p>
        </div>
      </Header>

      <Formulario action="" onSubmit={onSubmit}>
        <ComponenteInput
          estado={nombre}
          setEstado={setNombre}
          tipo="text"
          label="NOMBRE COMPLETO*"
          placeholder="Ej: Juan Camilo Diez"
          id="nombre"
          mensajeError="Este campo es obligatorio"
          expresionRegular={expresiones.nombre}
        />

        <ComponenteInput
          estado={identificacion}
          setEstado={setIdentificacion}
          tipo="number"
          label="NUMERO DE IDENTIFICACIÓN*"
          placeholder="Ej: 13527865"
          id="identificacion"
          mensajeError="Este campo es obligatorio"
          expresionRegular={expresiones.telefono}
        />

        <ComponenteInput
          estado={correo}
          setEstado={setCorreo}
          tipo="email"
          label="CORREO ELECTRÓNICO"
          placeholder="Ej: camilo@gmail.com"
          id="email"
          mensajeError="Correo electrónico no valido"
          expresionRegular={expresiones.correo}
        />

        <div>
          <Label>CIUDAD</Label>
          <SelectInput
            selectOpciones={ciudades}
            estado={ciudad}
            cambiarEstado={setCiudad}
          />
        </div>

        <ComponenteInput
          estado={altura}
          setEstado={setAltura}
          tipo="number"
          label="ALTURA mts"
          placeholder="Ej: 1.72"
          id="altura"
        />

        <ComponenteInput
          estado={peso}
          setEstado={setPeso}
          tipo="number"
          label="PESO kg "
          placeholder="Ej: 80"
          id="peso"
          mensajeError="Solo puede ingresar caracteres numericos"
          expresionRegular={expresiones.telefono}
        />

        <div>
          <Label>TALLA</Label>
          <SelectInput
            selectOpciones={[{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }]}
            estado={talla}
            setEstado={setTalla}
          />
        </div>

        <Label>
          ¿Durante el ejercicio o deporte que practica ha tenido dolor en el
          pecho?
          <InputRadio
            estado={dolor}
            setEstado={setDolor}
            name="dolorPecho"
            radioOpciones={[
              { id: "si", texto: "Si", value: true },
              { id: "no", texto: "No", value: false },
            ]}
          />
        </Label>

        {formularioValido === false && (
          <AlertaError>
            <p>
              <b>Error: </b> Por favor rellena el formulario correctamente.
            </p>
          </AlertaError>
        )}

        <ContenedorBoton>
          <BotonEnviar type="reset" onClick={btnCancelar}>
            Cancelar
          </BotonEnviar>
        </ContenedorBoton>

        <ContenedorBoton>
          <BotonEnviar type="submit">Guardar</BotonEnviar>
        </ContenedorBoton>
      </Formulario>
   
      <Tabla>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Identificación</th>
            <th>Correo</th>
            <th>Ciudad</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>Talla</th>
            <th>IMC</th>
            <th>Dolor en el pecho</th>
            <th>Valoración</th>
          </tr>
        </thead>
        <tbody>
          {
            datos.map((dato, index) => (
              <tr key={index}>
                <td>{dato.nombre}</td>
                <td>{dato.identificacion}</td>
                <td>{dato.correo}</td>
                <td>{dato.ciudad}</td>
                <td>{dato.altura}</td>
                <td>{dato.peso}</td>
                <td>{dato.talla}</td>
                <td>{dato.imc}</td>
                <td>{dato.dolor}</td>
                <td>{dato.valoracion}</td>
              </tr>
            ))
          }
        </tbody>
      </Tabla>
     
    </main>
  );
};
export default App;
