// JSX

// import React from "react";
// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const name = "Your name";
// // React.createElement("h1", { style: { textAlign: "center" } }, name)
// root.render(
//   React.createElement("h1", { style: { textAlign: "center" } }, name)
// );
// {/* <h1 style={{ textAlign: "center" }}>
// 	{ name }
// </h1>
// root.render(
//   <h1 style={{ textAlign: "center" }}>
// 	{ name }
//   </h1>
// ); */}

// [Thực hành] Tạo Element thể hiện danh sách các loại quả
// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Apricot",
//   "Black rowan",
//   "Cranberry"
// ];

// root.render(
//   <div>
//     <h1>List of fruits</h1>
//     <ul>
//       {fruits.map(item => (
//         <li>{item}</li>
//       ))}
//     </ul>
//   </div>
// );


// [Thực hành] Hiển thị thời gian hiện tại (dd/mm/yyyy – hh/mm/ss)
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const tick = () => {
root.render(
  <div>
    <h1>Hello, word!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
);
};
setInterval(tick, 1000);