import { shallow } from "enzyme";

import { findElement, checkProps } from "../testUtils";
import { Congrats } from "./Congrats";

const defaultProps = {
  success: false,
};

const createWrapper = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...finalProps} />);
};

describe("Congrats component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper();
  });

  test("should render correctly", () => {
    const element = findElement(wrapper, "congrats-component");
    expect(element.length).toBe(1);
  });

  test("should show no text when success prop is false", () => {
    const element = findElement(wrapper, "congrats-message");
    expect(element.text()).toBe("");
  });

  test("should show congrats text when success prop is true", () => {
    wrapper = createWrapper({ success: true });
    const element = findElement(wrapper, "congrats-message");
    expect(element.text()).not.toBe("");
  });

  test("should not throw warning with expected props", () => {
    const expectedProps = { success: false };
    const propError = checkProps(Congrats, expectedProps);
    expect(propError).toBeUndefined();
  });
});
