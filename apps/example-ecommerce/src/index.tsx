import { render } from 'solid-js/web';
import "tailwindcss/tailwind.css";

import "./index.css";
import { Router } from "solid-app-router";
import App from "./App";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")
);

// render(App, document.getElementById('root'));
