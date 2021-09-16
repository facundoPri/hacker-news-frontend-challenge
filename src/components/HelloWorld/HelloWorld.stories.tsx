import { HelloWorld } from ".";

export default {
  component: HelloWorld,
  title: "HelloWorld",
};

const Template = (args) => <HelloWorld {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
