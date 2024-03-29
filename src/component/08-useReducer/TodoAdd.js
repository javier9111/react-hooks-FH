import React from "react";
import { useForm } from "../../Hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    handleAddTodo(newTodo);
    reset();
  };
  return (
    <>
      <h4>Agregar to Do</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="aprender ..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <div className="d-grid gap-2 mt-1">
          <button type="submit" className="btn btn-primary">
            agregar
          </button>
        </div>
      </form>
    </>
  );
};
