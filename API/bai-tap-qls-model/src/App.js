import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Books from "./pages/Books";
// import UserShow from "./pages/UserShow";
import BookEdit from "./pages/BookEdit";
import BookAdd from "./pages/BookAdd";

function App() {
  return ( 
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Books/>} />
            <Route path="/books/:id/edit" element={<BookEdit />} />
            {/* <Route path="/books/:id" element={<UserShow/>} /> */}
            <Route path="/books/create" element={<BookAdd/>} /> 
          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;