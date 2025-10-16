import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['add', 'edit', 'trash', 'settings', 'calendar', 'arrow-right'],
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

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon name="add" size="XS" />
      <Icon name="add" size="S" />
      <Icon name="add" size="M" />
      <Icon name="add" size="L" />
    </div>
  ),
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))', 
      gap: '16px',
      maxWidth: '400px'
    }}>
      {[
        'add', 'add-circle', 'alert-circle', 'alert-triangle', 'archive',
        'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'bell',
        'trash', 'building', 'calendar', 'camera', 'check',
        'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'close',
        'mail', 'folder', 'folder-open', 'lock', 'menu',
        'pencil', 'question-circle', 'remove', 'search', 'settings',
        'upload', 'user', 'view', 'view-off'
      ].map((iconName) => (
        <div key={iconName} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '4px',
          padding: '8px',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          backgroundColor: '#f8fafc'
        }}>
          <Icon name={iconName as any} size="M" />
          <span style={{ fontSize: '10px', color: '#64748b', textAlign: 'center' }}>
            {iconName}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};