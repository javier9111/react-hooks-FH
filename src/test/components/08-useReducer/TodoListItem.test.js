import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { TodoListItem } from "../../../component/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Test on <TodoListItem/>", () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();
  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
      index={0}
    />
  );
  test("should show correctly", () => {
    //  console.log(demoTodos[0]);
    expect(wrapper).toMatchSnapshot();
  });

  test("should call the delete function", () => {
    wrapper.find(".btn-danger").simulate("click");
    expect(handleDelete).toHaveBeenCalled();
  });

  test("should call the toggle function", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalled();
  });

  test("should show the text correctly", () => {
    //the paragraf text
    const todo = demoTodos[0];
    expect(wrapper.find("p").text().trim()).toBe(`1.${todo.desc}`);
  });
  test("should contain the complete class", () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        index={0}
      />
    );

    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
