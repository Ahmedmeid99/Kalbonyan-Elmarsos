import { render, screen } from "@testing-library/react";

import Greeting from "./Greeting";

test("check if hello text is defind or not", () => {
  render(<Greeting />);
  //...
  const helloEL = screen.getByText("Hello World!");
  expect(helloEL).toBeInTheDocument();
});
