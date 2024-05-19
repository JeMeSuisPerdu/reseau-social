import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit"; // Importe configureStore depuis Redux Toolkit
import rootReducer from "./reducers";
import { getUsers } from "./actions/users.actions";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Utilise configureStore de Redux Toolkit
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production", // Active Redux DevTools uniquement en développement
});

store.dispatch(getUsers());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
