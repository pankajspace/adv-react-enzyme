import { shallow } from "enzyme";

import { checkProps, findElement } from "../testUtils";
import { GuessedWords } from "./GuessedWords";

const defaultProps = {
  guessedWords: [
    { word: "pest", correctLetters: 3 },
    { word: "best", correctLetters: 3 },
  ],
};

const createWrapper = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...finalProps} />);
};

describe("GuessedWords component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper();
  });

  it("should render without error", () => {
    const element = findElement(wrapper, "guessed-words-component");
    expect(element.length).toBe(1);
  });

  describe("if there are no words guessed", () => {
    it("should render instructions", () => {
      const props = { guessedWords: [] };
      wrapper = createWrapper(props);
      const element = findElement(wrapper, "guessed-words-instructions");
      expect(element.length).toBe(1);
    });
  });

  describe("if there are some words guessed", () => {
    it("should render table", () => {
      const element = findElement(wrapper, "guessed-words-table");
      expect(element.length).toBe(1);
    });
    it("should render table with correct no of guesses", () => {
      const element = findElement(wrapper, "guessed-words-row");
      expect(element.length).toBe(defaultProps.guessedWords.length);
    });
  });

  it("should not throw warning with expected props", () => {
    const expectedProps = {
      guessedWords: [{ word: "pest", correctLetters: 3 }],
    };
    const propError = checkProps(GuessedWords, expectedProps);
    expect(propError).toBeUndefined();
  });
});
