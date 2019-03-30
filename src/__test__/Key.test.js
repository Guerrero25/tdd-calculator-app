import React from "react";
import { shallow } from "enzyme";
/* Components */
import Key from "../components/Calculator/Key";

describe("<Key />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Key keyAction={jest.fn()} keyValue="" keyType="" />);
  });

  it("should renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should renders a <div /> element", () => {
    expect(wrapper.find("div.key-container").length).toEqual(1);
  });

  it("should renders the keyValue prop", () => {
    wrapper.setProps({ keyValue: "test" });
    expect(wrapper.text()).toEqual("test");
  });
});
