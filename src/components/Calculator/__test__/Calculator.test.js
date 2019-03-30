import React from "react";
import { shallow } from "enzyme";
import Calculator from "../";

describe("<Calculator />", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
