import { NavigationSwitch } from ".";

export default {
  component: NavigationSwitch,
  title: "NavigationSwitch",
};

const Template = (args) => <NavigationSwitch {...args} />;

export const All = Template.bind({});
All.args = {
  actualPage: "/",
};

export const My_Faves = Template.bind({});
My_Faves.args = {
  actualPage: "/faves",
};
