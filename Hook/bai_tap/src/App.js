// [Bài tập] Xây dựng component Car selection

// import React, { useState } from 'react';
// let carList = ['Honda','BMW','Mazda'];
// let colorList = ['Black','White','Red'];

// function App(){
//   const [selectedCar,setSelectedCar] = useState({car: carList[0],color: colorList[0]});

//   function handleCarChange(event){
//     const newCar = event.target.value;
//     setSelectedCar(previousState => {
//       return {
//         ...previousState,
//         car: newCar,
//       };
//     });
//   }
//   function handleColorChange(event) {
//     const newColor = event.target.value;
//     setSelectedCar(previousState => {
//       return {
//         ...previousState,
//         color: newColor,
//       };
//     });
//   }

//   return (
//     <div>
//       <h1>Select Car and Color</h1>
//       <div>
//         <label htmlFor="cars">Choose a car:</label>
//         <select id="cars" name="cars" value={selectedCar.car} onChange={handleCarChange}>
//           {carList.map(car => (
//             <option key={car} value={car}>
//               {car}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label htmlFor="colors">Choose a color:</label>
//         <select id="colors" name="colors" value={selectedCar.color} onChange={handleColorChange}>
//           {colorList.map(color => (
//             <option key={color} value={color}>
//               {color}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <h2>You have selected a {selectedCar.color} {selectedCar.car}.</h2>
//       </div>
//     </div>
//   );
// }
// export default App;

// [Bài tập] Xây dựng Component Counter
import React, { useState } from 'react';
function useIncrement(addAmount){
  const [count,setConut] = useState(0);
  function increase(){
    setConut((prevCount) => prevCount + addAmount);
  }
  return [count, increase];
}
function Counter1(){
  const [count, increase] = useIncrement(1);
  return (
    <div>
      <h1>Count 1</h1>
      <p>Count: {count}</p>
      <button onClick={increase}>Add1</button>
    </div>
  )
}
function Counter2(){
  const [count, increase] = useIncrement(2);
  return (
    <div>
      <h1>Count 2</h1>
      <p>count: {count}</p>
      <button onClick={increase}>Add2</button>
    </div>
  )
}
function App(){
  return (
    <>
    <Counter1/>,
    <Counter2/>
    </>
  )
}

export default App;