#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const componentName = process.argv[2];
if (!componentName) {
  console.error('Usage: node create-component.js <component-name>');
  process.exit(1);
}

const componentsData = {
  input: {
    port: 6002,
    description: 'Flexible input component with validation and error handling built with Stencil',
    keywords: ['input', 'form', 'validation'],
    tsx: `import { Component, Prop, h, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'ct-input',
  styleUrl: 'ct-input.css',
  shadow: true,
})
export class Input {
  @Prop() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Prop({ mutable: true }) value: string = '';
  @Prop() placeholder: string = '';
  @Prop() label: string = '';
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() error: string = '';
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @State() isFocused: boolean = false;
  @Event() ctInput: EventEmitter<string>;
  @Event() ctFocus: EventEmitter<FocusEvent>;
  @Event() ctBlur: EventEmitter<FocusEvent>;

  private handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.ctInput.emit(this.value);
  };

  private handleFocus = (event: FocusEvent) => {
    this.isFocused = true;
    this.ctFocus.emit(event);
  };

  private handleBlur = (event: FocusEvent) => {
    this.isFocused = false;
    this.ctBlur.emit(event);
  };

  render() {
    return (
      <div class={\`input-wrapper input-wrapper--\${this.size} \${this.error ? 'input-wrapper--error' : ''} \${this.isFocused ? 'input-wrapper--focused' : ''}\`}>
        {this.label && (
          <label class="input-label">
            {this.label}
            {this.required && <span class="required">*</span>}
          </label>
        )}
        <input
          type={this.type}
          value={this.value}
          placeholder={this.placeholder}
          disabled={this.disabled}
          required={this.required}
          class="input-field"
          onInput={this.handleInput}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        {this.error && <div class="input-error">{this.error}</div>}
      </div>
    );
  }
}`,
    css: `:host {
  display: block;
  width: 100%;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
}

.required {
  color: #dc3545;
  margin-left: 2px;
}

.input-field {
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background-color: white;
  font-family: inherit;
  font-size: 16px;
  transition: all 0.2s ease;
  outline: none;
}

.input-field:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.input-field:disabled {
  background-color: #f9fafb;
  color: #6b7280;
  cursor: not-allowed;
}

.input-wrapper--small .input-field {
  padding: 6px 12px;
  font-size: 14px;
}

.input-wrapper--medium .input-field {
  padding: 8px 12px;
  font-size: 16px;
}

.input-wrapper--large .input-field {
  padding: 12px 16px;
  font-size: 18px;
}

.input-wrapper--error .input-field {
  border-color: #dc3545;
}

.input-wrapper--error .input-field:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}

.input-error {
  color: #dc3545;
  font-size: 12px;
  margin-top: 2px;
}

.input-wrapper--focused .input-label {
  color: #007bff;
}`
  },
  card: {
    port: 6003,
    description: 'Flexible card container component with header, footer and interactive features built with Stencil',
    keywords: ['card', 'container', 'layout'],
    tsx: `import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ct-card',
  styleUrl: 'ct-card.css',
  shadow: true,
})
export class Card {
  @Prop() variant: 'default' | 'bordered' | 'elevated' = 'default';
  @Prop() padding: 'none' | 'small' | 'medium' | 'large' = 'medium';
  @Prop() header: string = '';
  @Prop() footer: string = '';
  @Prop() clickable: boolean = false;

  render() {
    const cardClasses = [
      'card',
      \`card--\${this.variant}\`,
      \`card--padding-\${this.padding}\`,
      this.clickable ? 'card--clickable' : ''
    ].join(' ');

    return (
      <div class={cardClasses}>
        {this.header && (
          <div class="card-header">
            <slot name="header">{this.header}</slot>
          </div>
        )}
        
        <div class="card-content">
          <slot></slot>
        </div>
        
        {this.footer && (
          <div class="card-footer">
            <slot name="footer">{this.footer}</slot>
          </div>
        )}
      </div>
    );
  }
}`,
    css: `:host {
  display: block;
}

.card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.card--default {
  background-color: #ffffff;
}

.card--bordered {
  border: 1px solid #e5e7eb;
}

.card--elevated {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card--elevated:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.card--padding-none {
  padding: 0;
}

.card--padding-small .card-content {
  padding: 12px;
}

.card--padding-medium .card-content {
  padding: 16px;
}

.card--padding-large .card-content {
  padding: 24px;
}

.card--clickable {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card--clickable:hover {
  transform: translateY(-2px);
}

.card-header {
  padding: 16px 16px 0 16px;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 16px;
  font-weight: 600;
  color: #374151;
}

.card-content {
  color: #6b7280;
  line-height: 1.6;
}

.card-footer {
  padding: 0 16px 16px 16px;
  border-top: 1px solid #e5e7eb;
  margin-top: 16px;
  font-size: 14px;
  color: #9ca3af;
}`
  }
};

const data = componentsData[componentName];
if (!data) {
  console.error('Supported components: input, card');
  process.exit(1);
}

console.log(\`🚀 Creating \${componentName} component...\`);

const componentDir = path.join(__dirname, 'packages', componentName);

// 1. Update package.json
const packageJsonPath = path.join(componentDir, 'package.json');
const packageJson = {
  "name": \`@comp-test/\${componentName}\`,
  "version": "1.0.0",
  "description": data.description,
  "main": "dist/index.cjs.js",
  "module": "dist/index.js",
  "types": "dist/types/index.d.ts",
  "collection": "dist/collection/collection-manifest.json",
  "collection:main": "dist/collection/index.js",
  "unpkg": \`dist/\${componentName}/\${componentName}.esm.js\`,
  "exports": {
    ".": {
      "import": \`./dist/\${componentName}/\${componentName}.esm.js\`,
      "require": \`./dist/\${componentName}/\${componentName}.cjs.js\`,
      "types": "./dist/types/index.d.ts"
    },
    [\`./ct-\${componentName}\`]: {
      "import": \`./dist/components/ct-\${componentName}.js\`,
      "types": \`./dist/components/ct-\${componentName}.d.ts\`
    },
    "./loader": {
      "import": "./loader/index.js",
      "require": "./loader/index.cjs",
      "types": "./loader/index.d.ts"
    }
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/your-org/comp-test-monorepo.git",
    "directory": \`packages/\${componentName}\`
  },
  "files": ["dist/", "loader/"],
  "scripts": {
    "build": "stencil build",
    "start": "stencil build --dev --watch --serve",
    "test": "stencil test --spec",
    "test.watch": "stencil test --spec --watchAll",
    "generate": "stencil generate",
    "storybook": \`storybook dev -p \${data.port}\`,
    "build-storybook": "storybook build"
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  },
  "keywords": ["stencil", "web-components", ...data.keywords, "ui", "design-system", "typescript"],
  "author": "Your Name",
  "license": "MIT",
  "devDependencies": {
    "@stencil/core": "^4.27.1",
    "@types/jest": "^29.5.14",
    "@types/node": "^22.13.5",
    "jest": "^29.7.0",
    "jest-cli": "^29.7.0",
    "puppeteer": "^24.3.0"
  }
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// 2. Remove my-component
const myComponentPath = path.join(componentDir, 'src', 'components', 'my-component');
if (fs.existsSync(myComponentPath)) {
  fs.rmSync(myComponentPath, { recursive: true });
}

// 3. Create component files
const componentSrcDir = path.join(componentDir, 'src', 'components', \`ct-\${componentName}\`);
fs.mkdirSync(componentSrcDir, { recursive: true });

fs.writeFileSync(path.join(componentSrcDir, \`ct-\${componentName}.tsx\`), data.tsx);
fs.writeFileSync(path.join(componentSrcDir, \`ct-\${componentName}.css\`), data.css);

// 4. Update index.ts
const indexPath = path.join(componentDir, 'src', 'index.ts');
const indexContent = \`export * from './components/ct-\${componentName}/ct-\${componentName}';
export { \${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from './components/ct-\${componentName}/ct-\${componentName}';\`;
fs.writeFileSync(indexPath, indexContent);

// 5. Install dependencies
console.log(\`📦 Installing dependencies for \${componentName}...\`);
execSync('npm install', { cwd: componentDir, stdio: 'inherit' });

// 6. Build
console.log(\`🔨 Building \${componentName}...\`);
execSync('npm run build', { cwd: componentDir, stdio: 'inherit' });

console.log(\`✅ \${componentName} component created successfully!\`);

