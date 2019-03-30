import React from "react";
import { shallow } from "enzyme";
/* Components */
import Calculator from "../components/Calculator";
import Display from "../components/Calculator/Display";

describe("<Calculator />", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Display component", () => {
    expect(
      wrapper.containsMatchingElement(
        <Display displayValue={wrapper.instance().state.displayValue} />
      )
    ).toBeTruthy();
  });
});
