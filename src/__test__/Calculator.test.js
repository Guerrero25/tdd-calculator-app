import React from "react";
import { shallow } from "enzyme";
/* Components */
import Calculator from "../components/Calculator";
import Display from "../components/Calculator/Display";
import Keypad from "../components/Calculator/Keypad";

describe("<Calculator />", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it("should renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should renders a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Display and Keypad component", () => {
    const { displayValue, numbers, operators } = wrapper.instance().state;

    expect(
      wrapper.containsAllMatchingElements([
        <Display displayValue={displayValue} />,
        <Keypad
          callOperator={wrapper.instance().callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={wrapper.instance().setOperator}
          updateDisplay={wrapper.instance().updateDisplay}
        />
      ])
    ).toBeTruthy();
  });
});
