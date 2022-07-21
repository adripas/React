import './App.css';
//import {Testimonio}  from './componentes/Testimonio'; // import nombrado
import Testimonio  from './componentes/Testimonio';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestro Alumnos.</h1>
     <Testimonio 
      nombre ='Emma Bostian' 
      pais ='Suecia'
      imagen ='emma'
      cargo ='Ingeniera de Software'
      empresa ='Spotify'
      testimonio ='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim id iure tempore amet aspernatur! Illo deserunt deleniti voluptate, magni saepe id esse porro laborum dolores iure nostrum! Culpa, aut veniam!'  
     />
      <Testimonio 
      nombre ='Shawm Wang' 
      pais ='Singapur'
      imagen ='shawn'
      cargo ='Ingeniera de Software'
      empresa ='Amazon'
      testimonio ='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim id iure tempore amet aspernatur! Illo deserunt deleniti voluptate, magni saepe id esse porro laborum dolores iure nostrum! Culpa, aut veniam!'  
     />
       <Testimonio 
      nombre ='Sarah Chima' 
      pais ='Colomhbia'
      imagen ='sarah'
      cargo ='Ingeniera de Software'
      empresa ='ChatDesk'
      testimonio ='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim id iure tempore amet aspernatur! Illo deserunt deleniti voluptate, magni saepe id esse porro laborum dolores iure nostrum! Culpa, aut veniam!'  
     />
     </div>
    </div>
  );
}

export default App;
