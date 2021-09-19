import { All } from "./NavigationSwitch.stories";
import { render, screen } from "../../test/testUtils";

test("should render", () => {
  render(<All {...All.args} />);
  expect(screen.getByText("All"));
  expect(screen.getByText("My Faves"));
});
