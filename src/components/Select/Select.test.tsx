import { Primary } from "./Select.stories";
import { render, screen } from "../../test/testUtils";
import userEvent from "@testing-library/user-event";

test("should render primary", () => {
  render(<Primary {...Primary.args} />);
  const title = screen.getByText(Primary.args.title);

  expect(title);

  userEvent.click(title);

  const fistValue = screen.getByText(Primary.args.items[0].name);
  const secondValue = screen.getByText(Primary.args.items[0].name);
  const thirdValue = screen.getByText(Primary.args.items[0].name);

  expect(fistValue).toBeVisible();
  expect(secondValue).toBeVisible();
  expect(thirdValue).toBeVisible();
});
