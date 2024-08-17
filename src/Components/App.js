import { Routes, Route } from "react-router-dom";
import { Home, PostDetails, CreatePost, Navbar } from "./index";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}
