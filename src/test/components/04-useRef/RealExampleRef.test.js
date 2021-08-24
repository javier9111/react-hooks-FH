import React from "react";
import { shallow } from "enzyme";
import { RealExampleRef } from "../../../component/04-useRef/RealExampleRef";
import { MultipleCustomHooks } from "../../../component/03-examples/MultipleCustomHooks";

describe("Test on <RealExampleRef/>", () => {
  test("should show correctly", () => {
    const wrapper = shallow(<RealExampleRef />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should show the component <MultipleCustomHooks/>", () => {
    const wrapper = shallow(<RealExampleRef />);
    const button = wrapper.find("button");

    //console.log(wrapper.html());
    button.simulate("click");
    //expect(wrapper.contains(<MultipleCustomHooks />)).toBe(true); this an alternative to the assertion.
    expect(wrapper.find(MultipleCustomHooks).exists()).toBe(true);
  });
});
