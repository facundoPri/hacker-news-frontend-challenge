import { Select } from ".";

export default {
  component: Select,
  title: "Select",
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Select your news",
  items: [
    {
      src: "/icon-angular.png",
      name: "Angular",
      value: "angular",
    },
    {
      src: "/icon-react.png",
      name: "React",
      value: "reactjs",
    },
    {
      src: "/icon-vuejs.png",
      name: "VueJs",
      value: "vuejs",
    },
  ],
  handleSelection: (value) => alert(value),
};
