import React from "react";
import { mount } from "enzyme";
import FriendDetail from "../FriendsList/FriendDetail.Component";

describe("<FriendDetail /> component", () => {
  const props = {
    friends: [
      { name: "test", id: "1", favourite: true },
      { name: "test2", id: "2", favourite: false },
      { name: "test3", id: "3", favourite: false },
      { name: "test4", id: "4", favourite: false },
      { name: "test5", id: "5", favourite: false }
    ]
  };
 const wrapper= mount(<FriendDetail {...props} />);
  it("should render Button component ", () => {
    expect(FriendDetail).toBeDefined();
  });
});
