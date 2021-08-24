import React from "react";
import { shallow } from "enzyme";
import { TodoAdd } from "../../../component/08-useReducer/TodoAdd";
describe("Pruebas en <TodoAdd/>", () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should not call handleaddTODO", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("should call the function handleAddTodo", () => {
    const value = "Aprender React";

    wrapper.find("input").simulate("change", {
      target: { value, name: "description" },
    });
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    //in order to avoid wich exact value we need to compare to any object we can do the following
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });
    //this evaluation check if the method reset() has been executed.
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
