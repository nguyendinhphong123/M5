import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// import StateClass from "./StateClass";
// import StateFun from "./StateFun";
// import Count from "./Count";
import Calculator from "./Calculator";
import Student from "./Student";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <>
  // <StateClass/>
  // <StateFun/>
  // </>  
  // <Count/>
  // <Calculator/>
  <Student/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
