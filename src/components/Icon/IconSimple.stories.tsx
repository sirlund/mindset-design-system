import type { Meta, StoryObj } from '@storybook/react';
import { IconSimple } from './IconSimple';

const meta: Meta<typeof IconSimple> = {
  title: 'Components/IconSimple',
  component: IconSimple,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['add', 'edit', 'trash', 'settings'],
    },
    size: {
      control: { type: 'select' },
      options: ['XS', 'S', 'M', 'L'],
    },
    color: {
      control: { type: 'color' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'add',
    size: 'M',
  },
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconSimple name="add" />
      <IconSimple name="edit" />
      <IconSimple name="trash" />
      <IconSimple name="settings" />
    </div>
  ),
};
