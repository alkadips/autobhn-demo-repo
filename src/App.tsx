import { Route, Routes } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import UpdatePost from "./pages/UpdatePost";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit" element={<UpdatePost/>} />
      </Routes>
    </>
  );
}

export default App;
