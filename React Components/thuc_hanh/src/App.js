// [Thực hành] Sử dụng Props trong Component
// import Welcome from './components/Welcome';
// function App() {
//     return (
//         <div className="App">
//             <Welcome name="Admin" />
//         </div>
//     );
// }
// export default App;

// [Thực hành] Xây dựng Class component
// import AddComponent from './components/AddComponent';
// function App() {
//     return (
//         <AddComponent firstNumber={1} secondNumber={2} />
//     );
// }
// export default App;

// [Thực hành] Xây dựng Function component
import AddComponent from './components/AddComponent';
function App() {
    return (
        <AddComponent firstNumber={1} secondNumber={2} />
    );
}
export default App;