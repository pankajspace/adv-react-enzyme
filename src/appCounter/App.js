import { useState, useEffect } from "react";

import "./App.css";

function getUser() {
  return Promise.resolve({ id: "1", name: "Robin" });
}

function App() {
  const [counter, setCounter] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    loadUser();
  }, []);

  const decrementCounter = () => {
    if (counter === 0) {
      setShowMessage(true);
      return;
    }
    setCounter((c) => c - 1);
  };

  const renderMessage = () => {
    if (showMessage) {
      return (
        <h4 data-test="counter-message">
          Counter can not be decreased below zero.
        </h4>
      );
    }
  };

  return (
    <div className="App" data-test="component-app">
      <h3>Counter App</h3>
      {user ? <p>Signed in as {user.name}</p> : null}
      <span data-test="counter-text">Counter value is: </span>
      <span data-test="counter-value" id="counter-value">
        {counter}
      </span>
      <br></br>
      <button
        data-test="increment-button"
        onClick={(e) => {
          setShowMessage(false);
          setCounter((c) => c + 1);
        }}
      >
        increment counter
      </button>
      <button data-test="decrement-button" onClick={(e) => decrementCounter()}>
        decrement counter
      </button>
      {renderMessage()}
    </div>
  );
}

export default App;
