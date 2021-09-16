import { render, screen } from "../testUtils";
import { Home } from "../../src/pages/index";

test("Should render hello world", () => {
  render(<Home />);
  expect(screen.getByRole("heading")).toHaveTextContent(/hello/i);
});
