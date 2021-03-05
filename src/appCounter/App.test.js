import { shallow } from "enzyme";
import App from "./App";
import { findElement } from "../testUtils";

// Testing using Jest and Enzyme

const createWrapper = () => shallow(<App />);

xdescribe("App component should render properly", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper();
  });
  test("renders without error", () => {
    const appComponent = findElement(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
  });
  test("renders button", () => {
    const button = findElement(wrapper, "increment-button");
    expect(button.length).toBe(1);
  });
  test("renders counter text", () => {
    const counterText = findElement(wrapper, "counter-text");
    expect(counterText.length).toBe(1);
  });
  test("counter starts at 0", () => {
    const counterValue = findElement(wrapper, "counter-value").text();
    expect(counterValue).toBe("0");
  });
});

xdescribe("App component events should work as expected", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper();
  });
  test("clicking on increment button increaments counter", () => {
    const button = findElement(wrapper, "increment-button");
    button.simulate("click");
    const counterMessage = findElement(wrapper, "counter-message");
    expect(counterMessage.length).toBe(0);
  });
  test("clicking on increment button removes the message", () => {
    const button = findElement(wrapper, "increment-button");
    button.simulate("click");
  });
  test("clicking on decrement button when counter is 0 should show an error.", () => {
    const button = findElement(wrapper, "decrement-button");
    button.simulate("click");
    const counterMessage = findElement(wrapper, "counter-message");
    expect(counterMessage.length).toBe(1);
  });
  test("clicking on decrement button when counter is 0 then counter should remain 0.", () => {
    const button = findElement(wrapper, "decrement-button");
    button.simulate("click");
    const counterValue = findElement(wrapper, "counter-value").text();
    expect(counterValue).toBe("0");
  });
  test("clicking on decrement button decrements counter", () => {
    const button = findElement(wrapper, "decrement-button");
    button.simulate("click");
    const counterValue = findElement(wrapper, "counter-value").text();
    expect(counterValue).toBe("0");
  });
});
