import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("<App /> component", () => {
  mount(<App />);

  it("should render App component ", () => {
    expect(App).toBeDefined();
  });
});
