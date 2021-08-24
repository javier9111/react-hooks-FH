import React from "react";
import { mount } from "enzyme";
import { LoginScreen } from "../../../component/09-useContext/LoginScreen";
import { UserContext } from "../../../component/09-useContext/UserContext";
describe("test on <LoginScreen/>", () => {
  const setUser = jest.fn();
  //this should be call with mount but since I have problem with compability I had to ommit it.
  const wrapper = mount(
    <UserContext.Provider
      value={{
        setUser,
      }}
    >
      <LoginScreen />
    </UserContext.Provider>
  );

  test("should show properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // this test has to be done with mount.
  test("should execute the setUser methoid with the expected argument", () => {
    wrapper.find("button").prop("onClick")();
    //expect(setUser).toHaveBeenCalled();
    expect(setUser).toHaveBeenCalledWith({ id: 123, name: "javier" });
  });
});
