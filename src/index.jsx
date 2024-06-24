import React from "react";
import { App } from "./App";
import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";
import { store } from "./reducers/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
