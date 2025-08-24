# 🎯 Arcadia Components

Modern, framework-agnostic web component library built with Stencil. Supports React, Vue, and Angular out of the box.

## 📦 Packages

| Package | NPM | Description |
|---------|-----|-------------|
| [@arcadia-components/button](./packages/button) | [![npm](https://img.shields.io/npm/v/@arcadia-components/button.svg)](https://www.npmjs.com/package/@arcadia-components/button) | Flexible button component |
| [@arcadia-components/hello-world](./packages/helloWorld) | [![npm](https://img.shields.io/npm/v/@arcadia-components/hello-world.svg)](https://www.npmjs.com/package/@arcadia-components/hello-world) | Simple hello world component |

## 🚀 Quick Start

### Installation

```bash
# Install individual components
npm install @arcadia-components/button
npm install @arcadia-components/hello-world

# Or install multiple at once
npm install @arcadia-components/button @arcadia-components/hello-world
```

### Usage

#### React

```typescript
import { Button } from '@arcadia-components/button/bindings/react';
import { HelloWorld } from '@arcadia-components/hello-world/bindings/react';

function App() {
  return (
    <div>
      <HelloWorld />
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click me!
      </Button>
    </div>
  );
}
```

#### Vue

```typescript
// main.ts
import { ButtonPlugin, HelloWorldPlugin } from '@arcadia-components/button/bindings/vue';

app.use(ButtonPlugin);
app.use(HelloWorldPlugin);
```

```vue
<template>
  <div>
    <hello-world />
    <comp-button variant="primary" @buttonClick="handleClick">
      Click me!
    </comp-button>
  </div>
</template>
```

#### Angular

```typescript
// app.module.ts
import { ButtonModule, HelloWorldModule } from '@arcadia-components/button/bindings/angular';

@NgModule({
  imports: [
    ButtonModule.forRoot(),
    HelloWorldModule.forRoot()
  ],
})
export class AppModule { }
```

```typescript
// component.html
<hello-world></hello-world>
<comp-button variant="primary" (buttonClick)="handleClick($event)">
  Click me!
</comp-button>
```

## 🏗️ Features

- ✅ **Framework Agnostic** - Works with React, Vue, Angular
- ✅ **TypeScript Support** - Full type safety
- ✅ **Tree Shakeable** - Import only what you need
- ✅ **SSR Compatible** - Server-side rendering support
- ✅ **Modern Browsers** - ES2017+ support
- ✅ **CDN Available** - Use via unpkg or jsDelivr

## 📋 Framework Support

| Framework | Support | Binding Type |
|-----------|---------|-------------|
| **React** | ✅ | Component wrapper with hooks |
| **Vue** | ✅ | Plugin + composition API |
| **Angular** | ✅ | NgModule + standalone components |
| **Vanilla JS** | ✅ | Web components |

## 🎯 Component Features

### Button Component

- Multiple variants: `primary`, `secondary`, `danger`
- Sizes: `small`, `medium`, `large`
- States: `disabled`, `loading`
- Event handling
- Custom styling support

### HelloWorld Component

- Simple demonstration component
- Static content display
- Framework integration examples

## 📚 Documentation

- [Component Usage Guide](./COMPONENT-USAGE.md)
- [NPM Publishing Guide](./NPM-PUBLISH-GUIDE.md)
- [Framework Examples](./examples/)

## 🛠️ Development

### Prerequisites

- Node.js 16+
- NPM 8+

### Setup

```bash
# Clone repository
git clone https://github.com/your-org/arcadia-components.git
cd arcadia-components

# Install dependencies
npm install

# Bootstrap packages
npm run bootstrap

# Build all packages
npm run build

# Start development
npm run start
```

### Scripts

```bash
npm run build         # Build all packages
npm run test          # Run all tests
npm run start         # Start development servers
npm run storybook     # Start Storybook
npm run publish       # Publish to NPM
```

## 🏢 Organization

This project is published under the [@arcadia-components](https://www.npmjs.com/org/arcadia-components) NPM organization.

### Publishing

```bash
# Quick publish
./publish.sh

# Manual steps
npm run build
npm run version
npm run publish
```

## 📄 License

MIT © [Arcadia Components](LICENSE)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📧 Support

- 🐛 [Report Issues](https://github.com/your-org/arcadia-components/issues)
- 💬 [Discussions](https://github.com/your-org/arcadia-components/discussions)
- 📖 [Documentation](https://github.com/your-org/arcadia-components#readme)

---

<div align="center">
  <strong>Built with ❤️ using Stencil</strong>
</div>
