import ReactDOM from "react-dom/client";
import TaskProvider from "./Store/contextProvider";

import "./index.css";
import App from "./App";
import Background from "./UI/Background";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TaskProvider>
    <p className="link"> repository: <a href="https://github.com/nenadmne/Task"> https://github.com/nenadmne/Task </a> </p>
    <Background />
    <App />
  </TaskProvider>
);
