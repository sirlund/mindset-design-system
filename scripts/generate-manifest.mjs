import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

// Read package.json for version
const packageJson = JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf-8'));

// Component manifest definition
// This is manually maintained to ensure accuracy and provide examples
const manifest = {
  version: packageJson.version,
  generatedAt: new Date().toISOString(),
  components: {
    Button: {
      description: "A versatile button component with multiple variants and sizes",
      props: {
        children: {
          type: "ReactNode",
          required: true,
          description: "The content of the button"
        },
        variant: {
          type: "enum",
          values: ["primary", "accent", "tertiary", "text", "danger"],
          default: "primary",
          description: "The visual style of the button"
        },
        size: {
          type: "enum",
          values: ["xsmall", "small", "medium", "large"],
          default: "medium",
          description: "The size of the button"
        },
        disabled: {
          type: "boolean",
          default: false,
          description: "Whether the button is disabled"
        },
        loading: {
          type: "boolean",
          default: false,
          description: "Whether the button shows a loading spinner"
        },
        fullWidth: {
          type: "boolean",
          default: false,
          description: "Whether the button takes full width of its container"
        },
        startIcon: {
          type: "ReactNode",
          description: "Icon to display before the text"
        },
        endIcon: {
          type: "ReactNode",
          description: "Icon to display after the text"
        },
        onClick: {
          type: "function",
          description: "Click handler"
        },
        type: {
          type: "enum",
          values: ["button", "submit", "reset"],
          default: "button",
          description: "HTML button type"
        },
        className: {
          type: "string",
          description: "Additional CSS class name"
        }
      },
      examples: [
        '<Button variant="primary">Primary Button</Button>',
        '<Button variant="accent">Accent Button</Button>',
        '<Button variant="tertiary">Tertiary Button</Button>',
        '<Button variant="text">Text Button</Button>',
        '<Button variant="danger">Danger Button</Button>',
        '<Button variant="primary" size="small">Small Button</Button>',
        '<Button variant="accent" size="large">Large Button</Button>',
        '<Button variant="primary" disabled>Disabled Button</Button>',
        '<Button variant="accent" loading>Loading...</Button>',
        '<Button variant="primary" fullWidth>Full Width</Button>'
      ]
    },
    Card: {
      description: "A pricing card component for subscription plans",
      props: {
        plan: {
          type: "enum",
          values: ["Starter", "Individual", "Teams"],
          default: "Starter",
          description: "The plan type"
        },
        price: {
          type: "number",
          default: 0,
          description: "The plan price"
        },
        pricePeriod: {
          type: "string",
          default: "/Month",
          description: "The price period text"
        },
        seats: {
          type: "number",
          default: 1,
          description: "Number of seats/users"
        },
        canEditSeats: {
          type: "boolean",
          default: false,
          description: "Whether seats can be edited"
        },
        nextBillingAmount: {
          type: "number",
          default: 0,
          description: "Next billing amount"
        },
        renewalDate: {
          type: "string",
          default: "Sep 07, 2024",
          description: "Renewal date"
        },
        className: {
          type: "string",
          description: "Additional CSS class name"
        },
        onActionClick: {
          type: "function",
          description: "Click handler for the action button"
        }
      },
      examples: [
        '<Card plan="Starter" />',
        '<Card plan="Individual" price={20} />',
        '<Card plan="Teams" price={49} seats={5} canEditSeats />'
      ]
    },
    Icon: {
      description: "An icon component with various icon names and sizes",
      props: {
        name: {
          type: "enum",
          values: [
            "add", "add-circle", "alert-circle", "alert-triangle", "archive",
            "arrow-down", "arrow-left", "arrow-right", "arrow-up", "bell",
            "trash", "building", "calendar", "camera", "check",
            "chevron-down", "chevron-left", "chevron-right", "chevron-up", "close",
            "mail", "folder", "folder-open", "lock", "menu",
            "pencil", "question-circle", "remove", "search", "settings",
            "upload", "user", "view", "view-off"
          ],
          required: true,
          description: "The name of the icon to display"
        },
        size: {
          type: "enum",
          values: ["XS", "S", "M", "L"],
          default: "M",
          description: "The size of the icon (XS=16px, S=20px, M=24px, L=32px)"
        },
        color: {
          type: "string",
          default: "#29292a",
          description: "The color of the icon"
        },
        className: {
          type: "string",
          description: "Additional CSS class name"
        },
        onClick: {
          type: "function",
          description: "Click handler"
        }
      },
      examples: [
        '<Icon name="check" />',
        '<Icon name="close" size="L" />',
        '<Icon name="search" size="S" color="#0069ff" />',
        '<Icon name="user" size="M" />',
        '<Icon name="settings" />'
      ]
    }
  },
  usage: {
    importStyles: "import '@sirlund/mindset-ui/styles.css';",
    importComponents: "import { Button, Card, Icon } from '@sirlund/mindset-ui';",
    note: "Always import styles.css once at the root of your application before using components."
  }
};

// Ensure dist directory exists
mkdirSync(join(rootDir, 'dist'), { recursive: true });

// Write manifest
const outputPath = join(rootDir, 'dist', 'components-manifest.json');
writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

console.log(`✓ Manifest generated at ${outputPath}`);
console.log(`  Version: ${manifest.version}`);
console.log(`  Components: ${Object.keys(manifest.components).join(', ')}`);
