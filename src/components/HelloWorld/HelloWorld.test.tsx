import { Primary } from "./HelloWorld.stories";
// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../test/testUtils";

test("should render primary", () => {
  render(<Primary {...Primary.args} />);
  expect(screen.getByRole("heading")).toHaveTextContent(/hello world/i);
});
