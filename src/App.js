//Daniela Alexandra Davila Chacon A01566381
import './App.css';
import React, { useState } from 'react';

function App() {
// 1) Reemplaza estas variables por useState, puedes utilizar los valores iniciales que ya traen las variables
  //let temperatureColor = 'cold'
  //let temperatureValue = '100'
  const [temperatureColor, setColor] = useState('cold')
  const [temperatureValue, setTemp] = useState(10)
  
// 2) Agregar las funciones para manejar los eventos de Click a los botones para que 
//     cuando se presionen se incremente o decremente el valor de la temperatura. 

// 3) Agrega una lógica para que al momento de que el valor sea >= 20 grados, la variable 'temperatureColor' cambie a 'hot'
//    De igual manera si la temperatura baja a <20 grados, la variable cambie a 'cold'

// Para fines prácticos, agrega una regla que evite que los valores suban arriba de 30. Es decir al llegar a 30, no se podrá incrementar más.
// De igual manera al llegar los valores a 0 no se podrá decrementas más.

    function incrementar(){
      setTemp(temperatureValue + 1)
      if(temperatureValue >=30){
        setTemp(30)
      }
      if(temperatureValue >= 20){
        setColor('hot')
      }
    }
    function decrementar(){
      setTemp(temperatureValue - 1)
      if(temperatureValue <=0){
        setTemp(0)
      }
      if(temperatureValue <= 20){
        setColor('cold')
      }
    }
  
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-containerno">
        <button onClick={() => incrementar()}
            >+</button>
        <button onClick={() => decrementar()}>-</button>
      </div>
    </div>
  );
  }

export default App;
