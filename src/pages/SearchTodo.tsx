import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { getSearchTodo } from "../state/slices/todo.slice";
import { useSearchParams, NavLink } from "react-router-dom";
import { useAppDispatch } from "../state/store";

const SearchTodo: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchParam, setSearchParam] = useSearchParams();

  const searchTerm = searchParam.get("userId") || "";
  const handlerSearch = (e: any) => {
    const userId = e.target.value;
    if (userId) setSearchParam({ userId });
    else setSearchParam({});
  };
  const { list, loading, error } = useSelector(
    (state: RootState) => state.todos
  );
  console.log(searchTerm);

  React.useEffect(() => {
    dispatch(getSearchTodo(`${searchParam}`));
  }, [searchParam]);
  return (
    <div>
      <label htmlFor="">Search</label>
      <input type="text" value={searchTerm} onChange={handlerSearch} />
      <NavLink to="/">Todo</NavLink>
      <div>
        {loading ? (
          <h2>Loading ...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <ul>
            {list.map((todo, key) => {
              return <li key={key}>{todo.title}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchTodo;
