import React from "react";
import { mount } from "enzyme";
import {StarButton,DeleteButton} from "../Button.Component";

describe("<StarButton /> component", () => {
    const props ={
        flag:true,
        onClick:jest.fn()
    }
  mount(<StarButton {...props}/>);

  it("should render App component ", () => {
    expect(StarButton).toBeDefined();
  });
});
