import { Switch } from "react-router-dom";
import { Home, PostDetails, CreatePost, Navbar } from "./index";

export default function App() {
  return (
    <div className="App">
      <Switch exactpath="./">{Home}</Switch>
      <Switch exactpath="./post/postId">{PostDetails}</Switch>
      <Switch exactpath="./create-post">{CreatePost}</Switch>
    </div>
  );
}
