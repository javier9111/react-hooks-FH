import React from "react";
import { shallow } from "enzyme";
import { HomeScreen } from "../../../component/09-useContext/HomeScreen";
import { UserContext } from "../../../component/09-useContext/UserContext";
describe("test on <HomeScreen/>", () => {
  const user = {
    name: "Javier Robles",
    email: "javier.robles@gmail.com",
  };

  //this simulates the usercontext. the UserContext.Provider, for complete test it must use mount.
  const wrapper = shallow(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <HomeScreen />
    </UserContext.Provider>
  );

  test("should show properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
