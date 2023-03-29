import React from "react";
import "./App.css";
import Todos from "./pages/TodosPage";
import { Provider } from "react-redux";
import { store } from "./state/store";
function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}

export default App;
