import type { Preview } from '@storybook/react-vite'
import '../src/tokens/tokens.css'
import './preview.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    options: {
      storySort: {
        order: [
          'MindSet Design System',
          [
            'Introduction',
            'Design Tokens',
            'Components',
            ['Button', 'Card', 'Icon'],
          ],
        ],
      },
    },

    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: 'var(--color-surface-default)',
        },
        {
          name: 'dark',
          value: 'var(--color-surface-background-inverted)',
        },
      ],
    },
  },
};

export default preview;