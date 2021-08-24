import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../component/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../Hooks/useFetch";
import { useCounter } from "../../../Hooks/useCounter";
jest.mock("../../../Hooks/useFetch"); // here we mock the useFetch hook so everytimen is being used we assign our values
jest.mock("../../../Hooks/useCounter"); // here we mock the useCounter hook so everytimen is being used we assign our values

describe("Test on <MultipleCustomHooks>", () => {
  //since all the test are using this counter hook we put it in a before each block in order to use it, otherwise if get the mockreturn value outside the before each the test will break
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 1,
      increment: () => {},
      decrement: () => {},
    });
  });

  test("should show correctly", () => {
    //here we assign our mock values to be use in this test
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should show the info correctly", () => {
    //here we assign our mock values to be use in this test
    useFetch.mockReturnValue({
      data: [
        {
          author: "John",
          quote: "Hola Mundo",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola Mundo");
    expect(wrapper.find("footer").text().trim()).toBe("John");
  });
});
