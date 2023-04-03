import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import './style.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const phone = "123456";
const products = [
  {
    name: 'Iphone 1',
    price: 2000,
    color: 'red'
  },  
  {
    name: 'Iphone 2',
    price: 2000,
    color: 'red'
  }
];

// function App() {
//   return (
//     <>
//       <Header name="CodeGym" phone={phone} products={products} />
//       <h1>Noi dung</h1>
//       <Footer/>
//     </>
//   );
// }
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()