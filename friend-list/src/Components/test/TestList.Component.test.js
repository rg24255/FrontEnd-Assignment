import React from "react";
import { mount } from "enzyme";
import FriendList from '../FriendsList/FriendList.Component';

describe("<FriendList /> component", () => {
    mount(<FriendList />);
  
    it("should render FriendList component ", () => {
      expect(FriendList).toBeDefined();
    });
    it("should test input tag ", () => {
      const wrapper = mount(<FriendList/>)
      console.log(wrapper.debug())
      const mockEvent = {
        target:{
          value:'ab',
        },
        key:'Enter',
        preventDefault:jest.fn()
      }
      wrapper.find('.input-field').props().onChange(mockEvent)
      wrapper.find('.input-field').props().onKeyPress(mockEvent)
    });

  });