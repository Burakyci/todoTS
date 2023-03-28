import React from "react";
import "./App.css";
import TodosPage from "./pages/TodosPage";
import { Provider } from "react-redux";
import { store } from "./state/store";
function App() {
  return (
    <Provider store={store}>
      <TodosPage />
    </Provider>
  );
}

export default App;
