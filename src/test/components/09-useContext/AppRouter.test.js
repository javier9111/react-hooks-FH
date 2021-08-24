import React from "react";
import { mount } from "enzyme";
import { AppRouter } from "../../../component/09-useContext/AppRouter";
import { UserContext } from "../../../component/09-useContext/UserContext";
describe("test on <AppRouter/>", () => {
  const user = {
    id: 1,
    name: "Javier",
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );
  test("should show properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
