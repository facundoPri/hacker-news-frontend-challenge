import { Primary } from "./Card.stories";
import { render, screen } from "../../test/testUtils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

test("should render primary", () => {
  render(<Primary {...Primary.args} />);

  dayjs.extend(relativeTime);
  const timeText = dayjs(Primary.args.created_at).fromNow();
  expect(screen.getByText(timeText, { exact: false }));
  expect(screen.getByText(Primary.args.author, { exact: false }));
  expect(screen.getByText(Primary.args.story_title, { exact: false }));
});
