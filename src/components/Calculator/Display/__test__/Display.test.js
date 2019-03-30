import React from "react";
import { shallow } from "enzyme";
/* Components */
import Display from "../";

describe("<Display />", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Display displayValue="" />)));

  it("should renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should renders a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should renders the value of displayValue", () => {
    wrapper.setProps({ displayValue: "test" });
    expect(wrapper.text()).toEqual("test");
  });
});
