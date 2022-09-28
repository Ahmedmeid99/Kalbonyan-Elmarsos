import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";
describe("Greeting component", () => {
  test("check if hello text is defind or not", () => {
    render(<Greeting />);
    //...
    const helloEL = screen.getByText("Hello World!");
    expect(helloEL).toBeInTheDocument();
  });
  // test("check if 'It is good to see you' text is defind or not", () => {
  //   render(<Greeting />);
  //   //...
  //   const TextEL = screen.getByText("It is good to see you");
  //   expect(TextEL).toBeInTheDocument();
  // });
  test("check if render 'changed' or not", () => {
    render(<Greeting />);
    //ACT
    const buttonEl = screen.getByRole("button"); // or use getByText
    userEvent.click(buttonEl);
    // ASSERT
    const outPutTextEL = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outPutTextEL).not.toBeInTheDocument();
  });
});
