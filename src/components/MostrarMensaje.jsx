

import "../App.css";
import { Button } from 'react-bootstrap';
import { useState } from "react";
const MostrarMensaje = () => {
  // Definir el estado del mensaje
  const [mensaje, setMensaje] = useState([]);

  // Función para manejar el clic del botón
  const mostrarMensaje = () => {
    setMensaje('(from changed stated)');
  };
    return (
      <>

      <p>{mensaje}</p>
      <Button variant="danger" onClick={mostrarMensaje}>Mostrar Mensaje</Button>
    </>
    );
  };
  
  export default MostrarMensaje;
  

