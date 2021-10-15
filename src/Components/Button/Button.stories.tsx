import { ComponentStory, Meta } from '@storybook/react';
import { Button } from './Button';

export default {
  component: Button,
  // Atomic design: https://atomicdesign.bradfrost.com/chapter-2/
  title: 'Atoms/Button',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    isPrimary: { control: 'boolean' },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  isPrimary: true,
  label: 'Submit',
};

// rename a story to give it a more descriptive name
// Primary.storyName = 'I am the primary';

export const Secondary = Template.bind({});
Secondary.args = {
  isPrimary: false,  
  label: 'Submit',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Submit',
  backgroundColor: '#ddd',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Submit',
  backgroundColor: '#ddd',
};