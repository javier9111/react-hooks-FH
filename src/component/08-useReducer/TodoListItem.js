import React from "react";

export const TodoListItem = ({ todo, handleToggle, handleDelete, index }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        onClick={() => handleToggle(todo.id)}
        className={`text-center ${todo.done && "complete"}`}
      >
        {index + 1}.{todo.desc}
      </p>
      <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">
        borrar
      </button>
    </li>
  );
};
