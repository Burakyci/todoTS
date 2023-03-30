import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
