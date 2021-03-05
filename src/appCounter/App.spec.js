import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// Testing using Jest and React testing library
// https://www.robinwieruch.de/react-testing-library

xdescribe("App component should render properly", () => {
  beforeEach(() => {});
  test("renders without error", () => {
    render(<App />);
    // screen.debug();
    expect(screen.getByText("Counter App")).toBeInTheDocument();
  });
  test("renders increment button", () => {
    render(<App />);
    expect(screen.getByText("increment counter")).toBeInTheDocument();
  });
  test("renders decrement button", () => {
    render(<App />);
    expect(screen.getByText("decrement counter")).toBeInTheDocument();
  });
  test("renders counter text", () => {
    render(<App />);
    expect(screen.getByText("Counter value is:")).toBeInTheDocument();
  });
  test("counter starts at 0", () => {
    let app = render(<App />);
    expect(
      app.container.querySelector("span[data-test='counter-value']").textContent
    ).toBe("0");
  });
  // writing test for checking asynchronous values
  test("renders App component", async () => {
    render(<App />);
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    // screen.debug();
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    // screen.debug();
  });
});

xdescribe("App component events should work as expected", () => {
  beforeEach(() => {});
  test("clicking on increment button increaments counter", async () => {
    let app = render(<App />);
    expect(screen.queryByText("1")).toBeNull();
    fireEvent.click(
      app.container.querySelector("button[data-test='increment-button']"),
      {
        target: { value: "1" },
      }
    );
    expect(
      app.container.querySelector("span[data-test='counter-value']").textContent
    ).toBe("1");
  });
  test("clicking on increment button removes the message", async () => {
    let app = render(<App />);
    fireEvent.click(
      app.container.querySelector("button[data-test='decrement-button']")
    );
    expect(
      screen.getByText("Counter can not be decreased below zero.")
    ).toBeInTheDocument();
    fireEvent.click(
      app.container.querySelector("button[data-test='increment-button']")
    );
    expect(
      screen.queryByText("Counter can not be decreased below zero.")
    ).toBeNull();
  });
  test("clicking on decrement button when counter is 0 should show an error.", () => {
    let app = render(<App />);
    fireEvent.click(
      app.container.querySelector("button[data-test='decrement-button']")
    );
    expect(
      screen.getByText("Counter can not be decreased below zero.")
    ).toBeInTheDocument();
  });
  test("clicking on decrement button when counter is 0 then counter should remain 0.", () => {
    let app = render(<App />);
    fireEvent.click(
      app.container.querySelector("button[data-test='decrement-button']")
    );
    expect(
      app.container.querySelector("span[data-test='counter-value']").textContent
    ).toBe("0");
  });
  test("clicking on increment button should increment counter to 1 and then decrement button decrements counter back to zero again", () => {
    let app = render(<App />);
    fireEvent.click(
      app.container.querySelector("button[data-test='increment-button']")
    );
    expect(
      app.container.querySelector("span[data-test='counter-value']").textContent
    ).toBe("1");
    fireEvent.click(
      app.container.querySelector("button[data-test='decrement-button']")
    );
    expect(
      app.container.querySelector("span[data-test='counter-value']").textContent
    ).toBe("0");
  });
});
