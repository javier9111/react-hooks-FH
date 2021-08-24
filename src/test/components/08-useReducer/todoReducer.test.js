import { todoReducer } from "../../../component/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Test on todoReducer", () => {
  test("should return the default state", () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });
  test("should add a todo", () => {
    const action = {
      type: "add",
      payload: {
        id: 3,
        desc: "Aprender React",
        done: false,
      },
    };
    const state = todoReducer(demoTodos, action);

    expect(state).toEqual([...demoTodos, action.payload]);
  });
  test("should delete a TODO", () => {
    //action.payload = ID del TODO
    const action = {
      type: "delete",
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);

    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[1]]);
  });

  test("should do the TODO toggle", () => {
    //action.payload ID del TODO
    const action = {
      type: "toggle",
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);

    const [toggle] = state.filter((todo) => todo.id === action.payload);
    expect(toggle.done).toBe(true);
  });
});
