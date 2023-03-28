import React from 'react'
import { useSelector } from 'react-redux';
import { remove, setActiveItemIndex, toggleDone, update } from '../state/slices/todo.slice';
import { RootState, useAppDispatch } from '../state/store';
import { ITodoItemProps } from '../types/todoType';

const TodoItem: React.FC<ITodoItemProps> = ({ item, index }) => {
  const [title, setTitle] = React.useState(item.title);
  const dispatch = useAppDispatch();
  const { activeItemIndex } = useSelector((state: RootState) => state.todos);
  return (
    <li key={index}>
      <h6>
        <span style={{ fontWeight: "bold" }}>{item.id}</span>
        {activeItemIndex === index ? (
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        ) : (
          <span>{item.title}</span>
        )}
      </h6>
      <button onClick={() => dispatch(remove({ id: item.id }))}>
        Delete
      </button>{" "}
      <input
        type="checkbox"
        onChange={() => dispatch(toggleDone({ id: item.id }))}
        checked={item.done}
      />
      <button
        onClick={() => {
          if (activeItemIndex === index) {
            dispatch(setActiveItemIndex(undefined));
            dispatch(update({ id: item.id, message: title }));
          } else {
            setTitle(item.title);
            dispatch(setActiveItemIndex(index));
          }
        }}
      >
        {activeItemIndex === index ? "Save" : "Edit"}
      </button>
    </li>
  )
}

export default TodoItem