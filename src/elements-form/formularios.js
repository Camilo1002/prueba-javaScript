import styled, {css} from "styled-components";

//ARCHIVO DE STYLE COMPONENTS PARA DAR ESTILOS 

const colores = {
  borde: "#73C6CD",
  error: "#bb2929",
  
};

const Header = styled.header`
display: flex;
justify-content: center;
margin-bottom: 50px;
background-color: ${colores.borde};
p{text-align: center}
`

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;

  ${props => props.valido === 'false' && css`
    color: ${colores.error};

`}
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;
  background-color: beige;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
  }

  ${props => props.valido === 'true' && css`
    border: 3px solid transparent;
  `}

  ${props => props.valido === 'false' && css`
    border: 3px solid ${colores.error} !important;
  `}
`;

const MensajeError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;

  ${props => props.valido === 'true' && css`
    display: none;
`}
  ${props => props.valido === 'false' && css`
  display: block;
`}
`;

const AlertaError = styled.div`
  height: 45px;
  line-height: 45px;
  background: #f66060;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  }
`;

const ContenedorBoton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 1;

  @media (max-width: 800px){
    grid-column: span 1;
  }
`;

const BotonEnviar = styled.button`
  height: 45px;
  line-height: 45px;
  width: 30%;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${colores.borde};
`;


const Select = styled.select`
width: 100%;
border-radius: 3px;
height: 45px;
line-height: 45px;
padding: 0 40px 0 10px;
transition: 0.3s ease all;
border: 3px solid transparent;
background-color: beige;

&:focus {
  border: 3px solid ${colores.borde};
  outline: none;
}

${props => props.valido === 'true' && css`
  border: 3px solid transparent;
`}

${props => props.valido === 'false' && css`
  border: 3px solid ${colores.error} !important;
`}
`;

 

const Tabla = styled.table`
  background-color: white;
  text-align: left;
  width: 100%;
  margin-top: 50px;
  border-collapse: colapse;
  thead{
    background-color: ${colores.borde};
    
  }
  th{
    padding: 10px;
  }, td{
    padding: 10px;
    background-color: #ddd; 
  }
  @media (max-width: 800px){


    thead{
      display: none;
      
    },
    tr,td{
      display: block;
      font-size: 18px;
      background-color: white;
      text-align: center;
     
    }
  }

  `
  


export {
  Formulario,
  Label,
  GrupoInput,
  Input,
  MensajeError,
  AlertaError,
  ContenedorBoton,
  BotonEnviar,
  Tabla,
  Select,
  Header
};
