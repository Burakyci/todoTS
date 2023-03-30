import React from "react";
import { Routes, Route } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import Search from "./pages/Search";
import { useAppDispatch } from "./state/store";
import { getTodos } from "./state/slices/todo.slice";

const AppRouter: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div>
      <Routes>
        <Route index element={<TodosPage />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
