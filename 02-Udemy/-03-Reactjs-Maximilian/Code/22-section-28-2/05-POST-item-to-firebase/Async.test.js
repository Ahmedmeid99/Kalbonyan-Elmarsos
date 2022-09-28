import { render, screen } from "@testing-library/react";
import Async from "./components/Async";
describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    render(<Async />);

    const listItemEl = await screen.findAllByRole("listitem");
    expect(listItemEl).not.toHaveLength(0);
  });
});
