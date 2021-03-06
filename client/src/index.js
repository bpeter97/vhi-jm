import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import registerServiceWorker from "./middleware/registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
