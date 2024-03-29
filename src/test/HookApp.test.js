import React from "react";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Test on <hookApp> component", () => {
  test("should match the snapshot", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
