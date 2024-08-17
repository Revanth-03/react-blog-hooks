import { createRoot } from "react-dom/client";
import App from "./Componets/App";
import { BrowserRouter as Route } from "react-router-dom";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Route>
    <App />
  </Route>
);
