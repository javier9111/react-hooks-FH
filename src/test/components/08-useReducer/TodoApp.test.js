import React from "react";
import { mount, shallow, configure } from "enzyme";

import { TodoApp } from "../../../component/08-useReducer/TodoApp";
import { act } from "@testing-library/react";
import { demoTodos } from "../../fixtures/demoTodos";

describe("test on <TodoApp/>", () => {
  const wrapper = shallow(<TodoApp />);
  test("should show properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //compatibility problems in this test case
  //   test("should add 1 todo", () => {
  //     const wrapper = mount(<TodoApp />);
  //     act(() => {
  //       wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
  //       wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1]);
  //     });
  //   expect (wrapper.find("h1").text().trim()).toBe("TodoApp(2)");
  //   expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  //   });

  test("should delete a todo", () => {
    wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
    wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);

    expect(wrapper.find("h1").text().trim()).toBe("TodoApp (0)");
  });
});
