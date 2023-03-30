import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { useSearchParams, NavLink } from "react-router-dom";

const Search = () => {
  const { list, loading, error } = useSelector(
    (state: RootState) => state.todos
  );
  const [searchParam, setSearchParam] = useSearchParams();
  const searchTerm = searchParam.get("todo") || "";

  React.useEffect(() => {
    console.log(list);
  }, [list]);

  const handleSearch = (e: any) => {
    const todo = e.target.value;

    if (todo) setSearchParam({ todo });
    else {
      setSearchParam({});
    }
  };
  return (
    <div>
      <label htmlFor="">Search</label>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <NavLink to="/">Todo</NavLink>
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
