import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable plan card component with different plan types, pricing, and seat management.',
      },
    },
  },
  argTypes: {
    plan: {
      control: { type: 'select' },
      options: ['Starter', 'Individual', 'Teams'],
      description: 'The plan type',
    },
    price: {
      control: { type: 'number' },
      description: 'The plan price (overrides default)',
    },
    pricePeriod: {
      control: { type: 'text' },
      description: 'The price period text',
    },
    seats: {
      control: { type: 'number' },
      description: 'Number of seats/users',
    },
    canEditSeats: {
      control: { type: 'boolean' },
      description: 'Whether seats can be edited',
    },
    nextBillingAmount: {
      control: { type: 'number' },
      description: 'Next billing amount',
    },
    renewalDate: {
      control: { type: 'text' },
      description: 'Renewal date',
    },
    onActionClick: {
      action: 'action clicked',
      description: 'Click handler for the action button',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    plan: 'Starter',
  },
};

// Plan Variants
export const Starter: Story = {
  args: {
    plan: 'Starter',
    price: 0,
    pricePeriod: '/Month',
    seats: 1,
    canEditSeats: false,
    nextBillingAmount: 0,
    renewalDate: 'Sep 07, 2024',
  },
};

export const Individual: Story = {
  args: {
    plan: 'Individual',
    price: 20,
    pricePeriod: '/Month',
    seats: 1,
    canEditSeats: false,
    nextBillingAmount: 20,
    renewalDate: 'Sep 07, 2024',
  },
};

export const Teams: Story = {
  args: {
    plan: 'Teams',
    price: 49,
    pricePeriod: 'Per User/Month',
    seats: 4,
    canEditSeats: true,
    nextBillingAmount: 196,
    renewalDate: 'Sep 07, 2024',
  },
};

// Teams with different seat counts
export const TeamsWithMoreSeats: Story = {
  args: {
    plan: 'Teams',
    price: 49,
    pricePeriod: 'Per User/Month',
    seats: 8,
    canEditSeats: true,
    nextBillingAmount: 392,
    renewalDate: 'Sep 07, 2024',
  },
};

// Custom pricing
export const CustomPricing: Story = {
  args: {
    plan: 'Individual',
    price: 25,
    pricePeriod: '/Month',
    seats: 1,
    canEditSeats: false,
    nextBillingAmount: 25,
    renewalDate: 'Dec 15, 2024',
  },
};

// All Plans Comparison
export const AllPlans: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '24px', 
      flexWrap: 'wrap', 
      justifyContent: 'center',
      maxWidth: '1200px'
    }}>
      <Card 
        plan="Starter"
        price={0}
        pricePeriod="/Month"
        seats={1}
        canEditSeats={false}
        nextBillingAmount={0}
        renewalDate="Sep 07, 2024"
      />
      <Card 
        plan="Individual"
        price={20}
        pricePeriod="/Month"
        seats={1}
        canEditSeats={false}
        nextBillingAmount={20}
        renewalDate="Sep 07, 2024"
      />
      <Card 
        plan="Teams"
        price={49}
        pricePeriod="Per User/Month"
        seats={4}
        canEditSeats={true}
        nextBillingAmount={196}
        renewalDate="Sep 07, 2024"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Interactive Playground
export const Playground: Story = {
  args: {
    plan: 'Individual',
    price: 20,
    pricePeriod: '/Month',
    seats: 1,
    canEditSeats: false,
    nextBillingAmount: 20,
    renewalDate: 'Sep 07, 2024',
  },
};
