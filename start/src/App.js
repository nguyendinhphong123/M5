// function App(){
//   return (
//   <>
//   <Header/>
//   <Footer/>
//   </>
//   )
// }

// export default App;

// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
		
//       this.state = {
//          header: "Header from state...",
//          content: "Content from state..."
//       }
//    }
//    render() {
//       return (
//          <div>
//             <h1>{this.state.header}</h1>
//             <h2>{this.state.content}</h2>
//          </div>
//       );
//    }
// }
// export default App;

import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
  function Home() {
   return (
     <>
       <main>
         <h2>Welcome to the homepage!</h2>
       </main>
       <nav>
         <Link to="/about">About</Link>
       </nav>
     </>
   );
 }
 
 function About() {
   return (
     <>
       <main>
         <h2>Who are we?</h2>
         <p>
           React Router is a lightweight, fully-featured routing library for the React JavaScript library
         </p>
       </main>
       <nav>
         <Link to="/">Home</Link>
       </nav>
     </>
   );
 }
}
