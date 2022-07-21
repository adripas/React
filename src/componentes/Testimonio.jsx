//import  React from 'react'; // desde el 2020 no se requiere
import  '../stylesheets/Testimonio.css'; //se escribe la extensión porque ausumiriaqeu es javascript
//export function Testimonio () // export nombrado : cuando tiene varios componentes

function Testimonio (props){ // componente funcionales, dos espacios estandar identacion js
  return(
    <div className='contenedor-testimonio'> 
      <img 
        className='imagen-testimonio' 
        src={require(`../imagenes/testimonio-${props.imagen}.png`)} /*permiten insertar copdigo de javascript dfentro de la cadena de caracteres
        /*  src={require('../imagenes/testimonio-emma.png' )} */
        alt= { `imagen de ${props.imagen}` }
       />

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais} </p>
        <p className='cargo-testimonio'>{props.cargo} en <strong> {props.empresa}</strong> </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
     
    </div>
     
  );
}

export default Testimonio; // unico componenete que se va a exportar, nombrada varios elmentos.