# MindSet Design System# MindSet Design System



A comprehensive Storybook documentation repository for the MindSet Design System, featuring components extracted from Figma with full specifications and interactive examples.A comprehensive Storybook documentation repository for the MindSet Design System, featuring components extracted from Figma with full specifications and interactive examples.



**Figma Source:** [MindSet Design System](https://www.figma.com/design/XVdVpzEXk8FK4GaXgT1Gi8/%E2%9D%96-MindSet-Design-System)**Figma Source:** [MindSet Design System](https://www.figma.com/design/XVdVpzEXk8FK4GaXgT1Gi8/%E2%9D%96-MindSet-Design-System)



## 📚 Overview## 📚 Overview



This repository documents and implements the MindSet Design System components as defined in Figma. It serves as:This repository documents and implements the MindSet Design System components as defined in Figma. It serves as:



- 🎨 **Component Documentation** - Interactive Storybook showcasing all component variants- 🎨 **Component Documentation** - Interactive Storybook showcasing all component variants

- 📋 **Design Reference** - Direct mapping to Figma component specifications- 📋 **Design Reference** - Direct mapping to Figma component specifications

- 🔧 **Implementation Guide** - Production-ready React components with TypeScript- 🔧 **Implementation Guide** - Production-ready React components with TypeScript

- ♿ **Accessibility** - Built-in a11y testing and documentation- ♿ **Accessibility** - Built-in a11y testing and documentation



## 🧩 Components## 🧩 Components



### Button Components (140 Total Variants)### Button Components (140 Total Variants)



#### 1. **Button** - 80 Variants#### 1. **Button** - 80 Variants

- **Types**: Primary, Accent (Secondary), Ghost (Tertiary), Text- **Types**: Primary, Accent (Secondary), Ghost (Tertiary), Text

- **Sizes**: XSmall, Small, Medium, Large- **Sizes**: XSmall, Small, Medium, Large

- **States**: Default, Hover, Active, Focus, Disabled- **States**: Default, Hover, Active, Focus, Disabled

- **Figma Node ID**: `90:1131`- **Figma Node ID**: `90:1131`



#### 2. **IconButton** - 48 Variants#### 2. **IconButton** - 48 Variants

- **Types**: Primary, Accent, Ghost, Text- **Types**: Primary, Accent, Ghost, Text

- **Sizes**: Small, XSmall- **Sizes**: Small, XSmall

- **Shapes**: Square, Circle- **Shapes**: Square, Circle

- **Figma Node ID**: `90:2972`- **Figma Node ID**: `90:2972`



#### 3. **ToggleButton** - 12 Variants#### 3. **ToggleButton** - 12 Variants

- **Types**: Default, Icon Only- **Types**: Default, Icon Only

- **Sizes**: Large, Small, XSmall- **Sizes**: Large, Small, XSmall

- **Figma Node ID**: `454:8432`- **Figma Node ID**: `454:8432`



### Additional Components### Additional Components

- **Card** - Pricing card components with variants- **Card** - Pricing card components with variants

- **Icon** - Icon system with multiple implementations- **Icon** - Icon system with multiple implementations



## 🚀 Getting Started## 🚀 Getting Started



### PrerequisitesCurrently, two official plugins are available:



- Node.js 16+ - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh

- npm or yarn- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



### Installation## Expanding the ESLint configuration



```bashIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

# Clone the repository

git clone <repository-url>```js

cd MindsetDSexport default tseslint.config([

  globalIgnores(['dist']),

# Install dependencies  {

npm install    files: ['**/*.{ts,tsx}'],

```    extends: [

      // Other configs...

### Running Storybook

      // Remove tseslint.configs.recommended and replace with this

```bash      ...tseslint.configs.recommendedTypeChecked,

# Start Storybook development server      // Alternatively, use this for stricter rules

npm run storybook      ...tseslint.configs.strictTypeChecked,

      // Optionally, add this for stylistic rules

# Storybook will be available at http://localhost:6006      ...tseslint.configs.stylisticTypeChecked,

```

      // Other configs...

### Building Storybook    ],

    languageOptions: {

```bash      parserOptions: {

# Build static Storybook site        project: ['./tsconfig.node.json', './tsconfig.app.json'],

npm run build-storybook        tsconfigRootDir: import.meta.dirname,

      },

# Output will be in storybook-static/      // other options...

```    },

  },

## 📦 Project Structure])

```

```

mindset-design-system/You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

├── .storybook/              # Storybook configuration

│   ├── main.ts              # Main config with addons```js

│   ├── preview.ts           # Global decorators and parameters// eslint.config.js

│   └── vitest.setup.ts      # Test configurationimport reactX from 'eslint-plugin-react-x'

├── src/import reactDom from 'eslint-plugin-react-dom'

│   └── components/          # Component library

│       ├── Button/export default tseslint.config([

│       │   ├── Button.tsx           # Main button component  globalIgnores(['dist']),

│       │   ├── Button.css           # Button styles  {

│       │   ├── Button.stories.tsx   # Button documentation (80 variants)    files: ['**/*.{ts,tsx}'],

│       │   ├── IconButton.stories.tsx   # IconButton docs (48 variants)    extends: [

│       │   ├── ToggleButton.stories.tsx # ToggleButton docs (12 variants)      // Other configs...

│       │   └── index.ts             # Exports      // Enable lint rules for React

│       ├── Card/      reactX.configs['recommended-typescript'],

│       │   ├── Card.tsx      // Enable lint rules for React DOM

│       │   ├── Card.css      reactDom.configs.recommended,

│       │   ├── Card.stories.tsx    ],

│       │   └── index.ts    languageOptions: {

│       └── Icon/      parserOptions: {

│           ├── Icon.tsx        project: ['./tsconfig.node.json', './tsconfig.app.json'],

│           ├── Icon.css        tsconfigRootDir: import.meta.dirname,

│           ├── Icon.stories.tsx      },

│           └── index.ts      // other options...

├── MINDSET_DESIGN_SYSTEM.md # Complete design system documentation    },

├── package.json  },

└── README.md])

``````


## 📖 Documentation

### Component Documentation

Each component includes comprehensive Storybook stories with:
- **Interactive controls** - Modify props in real-time
- **Multiple examples** - All variants and use cases
- **Design mapping** - Links to Figma node IDs
- **Code examples** - Copy-paste ready implementations
- **Accessibility notes** - a11y best practices

### Design System Documentation

See [MINDSET_DESIGN_SYSTEM.md](./MINDSET_DESIGN_SYSTEM.md) for:
- Complete component specifications from Figma
- Variant matrices and property tables
- Figma node ID reference
- Typography and color tokens
- Implementation guidelines

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start Storybook dev server on port 6006 |
| `npm run build-storybook` | Build static Storybook site |
| `npm run lint` | Run ESLint on the codebase |
| `npm run dev` | Alias for `npm run storybook` |
| `npm run build` | Alias for `npm run build-storybook` |

## 🧪 Testing

Storybook includes the following testing addons:
- **@storybook/addon-a11y** - Accessibility testing
- **@storybook/addon-vitest** - Component testing with Vitest

## 🎨 Design Tokens

The design system uses the following design tokens:

### Typography
- **UI-Label/XS** - Extra small labels
- **UI-Label/S** - Small labels  
- **UI-Label/M** - Medium labels (default)
- Each with Regular & Strong weights

### Colors
Defined in CSS variables, mapped from Figma:
- Primary colors for main actions
- Accent colors for secondary actions
- Ghost/Tertiary for subtle interactions
- Semantic colors (danger, success, warning)

## 🔗 Figma Integration

This repository is designed to work with the Figma design system:
- Component names match Figma layer names
- Props map to Figma component properties
- Variants mirror Figma variant structure
- Node IDs documented for programmatic access

## 📝 Contributing

When adding new components:
1. Create component files in `src/components/[ComponentName]/`
2. Include `.tsx`, `.css`, `.stories.tsx`, and `index.ts`
3. Document Figma node IDs in stories
4. Update `MINDSET_DESIGN_SYSTEM.md` with specifications
5. Add comprehensive stories covering all variants

## 🔧 Technology Stack

- **React 19** - UI library
- **TypeScript 5.8** - Type safety
- **Storybook 9.1** - Component documentation
- **Vite 7** - Build tool
- **Vitest 3** - Testing framework
- **ESLint** - Code linting

## 📄 License

[Add your license here]

## 👥 Team

MindSet Team

---

**Last Updated:** October 16, 2025  
**Storybook Version:** 9.1.5  
**Design System Version:** Based on Figma file 2025-10-15
