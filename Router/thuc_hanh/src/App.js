// [Thực hành] Router 1

// import logo from './logo.svg';
// // import './App.css';
// import { Routes, Route, Link } from "react-router-dom";
// import About from './router1/About';
// import Contact from './router1/Contact';
// import Home from './router1/Home';

// function App() {
//   return (
//     <div className="App">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contract</Link>
//           </li>
//         </ul>
//         <hr/>
//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// [Thực hành] Router 2
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./router2/Category";
import Product from "./router2/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/product/:categoryId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;