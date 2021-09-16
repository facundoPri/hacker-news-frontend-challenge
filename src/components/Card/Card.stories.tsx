import { Card } from ".";

export default {
  component: Card,
  title: "Card",
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    id:1,
    author:"author",
    story_title:"Yes, React is taking over front-end development. The question is why.",
    story_url:"http://ycombinator.com",
    created_at:"2021-09-16T18:21:51.000Z",
    favorited:false,
};

export const Favorited = Template.bind({});
Favorited.args = {
    id:1,
    author:"author",
    story_title:"Yes, React is taking over front-end development. The question is why.",
    story_url:"http://ycombinator.com",
    created_at:"2006-10-09T18:21:51.000Z",
    favorited:true,
};