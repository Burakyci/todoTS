import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { useSearchParams, NavLink } from "react-router-dom";

const Search: React.FC = () => {
  const { list, loading, error } = useSelector(
    (state: RootState) => state.todos
  );
  const [searchParam, setSearchParam] = useSearchParams();
  const searchTerm = searchParam.get("todos") || "";
  const handleSearch = (e: any) => {
    const todos = e.target.value;

    if (todos) setSearchParam({ todos });
    else {
      setSearchParam({});
    }
  };
  return (
    <div>
      <label htmlFor="">Search</label>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <NavLink to="/">todo</NavLink>{" "}
      <div>
        {loading ? (
          <h2>Loading ...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <ul>
            {list
              .filter((todo) =>
                todo.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((todo, key) => {
                return <li key={key}>{todo.title}</li>;
              })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
