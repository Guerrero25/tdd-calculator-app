import React from "react";
import { shallow, mount } from "enzyme";
/* Components */
import Keypad from "../components/Calculator/Keypad";

describe("<Keypad />", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <Keypad
          callOperator={jest.fn()}
          numbers={[]}
          operators={[]}
          setOperator={jest.fn()}
          updateDisplay={jest.fn()}
        />
      ))
  );

  it("should renders a <div />", () => {
    expect(wrapper.find("div.keypad-container").length).toEqual(1);
  });

  it("should renders the Key component for each index of numbers, operators, and the submit Key", () => {
    const numbers = ["1", "2"];
    const operators = ["*", "+"];
    const submit = 1;
    const totalKeys = numbers.length + operators.length + submit;

    wrapper.setProps({ operators, numbers });

    expect(wrapper.find("Key").length).toEqual(totalKeys);
  });

  describe("mounted <Keypad />", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(
        <Keypad
          callOperator={jest.fn()}
          numbers={[]}
          operators={[]}
          setOperator={jest.fn()}
          updateDisplay={jest.fn()}
        />
      );
    });

    it("renders the values of numbers to the DOM", () => {
      wrapper.setProps({ numbers: ["0", "1", "2"] });
      expect(wrapper.find(".numbers-container").text()).toEqual("012");
    });

    it("renders the values of operators to the DOM", () => {
      wrapper.setProps({ operators: ["+", "-", "*", "/"] });
      expect(wrapper.find(".operators-container").text()).toEqual("+-*/");
    });
  });
});
