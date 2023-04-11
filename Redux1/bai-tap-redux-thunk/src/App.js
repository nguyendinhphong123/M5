


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Post from "./components/Post";
import NewPost from "./components/NewPost";
import EditPost from "./components/EditPost";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;