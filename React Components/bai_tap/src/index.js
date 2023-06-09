import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Calculator from './Calculator';
import StudentList from './StudentInfo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// root.render(
//   <Calculator/>
// );

const products = [
  {
    id: '1',
    name: 'nguyen van a',
    age: '30',
    address: 'ha noi'
  },
  {
    id: '2',
    name: 'nguyen van b',
    age: '30',
    address: 'ha noi'
  }
];
function App() {
  return (
      <StudentList  products={products} />
      
  );
}
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();