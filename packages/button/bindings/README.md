# Button Component Bindings

Bu klasör, Button componentinin farklı framework'lerde kullanılması için gerekli binding'leri içerir.

## 📦 Mevcut Binding'ler

- **React** - React uygulamaları için
- **Vue** - Vue.js uygulamaları için  
- **Angular** - Angular uygulamaları için

## 🚀 Kullanım

### React

```typescript
import { Button } from '@arcadia-components/button/bindings/react';

function App() {
  const handleClick = (event) => {
    console.log('Button clicked!', event);
  };

  return (
    <div>
      <Button 
        variant="primary" 
        size="large"
        onButtonClick={handleClick}
      >
        Click me!
      </Button>
    </div>
  );
}
```

### Vue

**Global Kayıt (Plugin kullanarak):**

```typescript
// main.ts
import { createApp } from 'vue';
import { ButtonPlugin } from '@arcadia-components/button/bindings/vue';
import App from './App.vue';

const app = createApp(App);
app.use(ButtonPlugin);
app.mount('#app');
```

```vue
<!-- App.vue -->
<template>
  <div>
    <comp-button 
      variant="primary" 
      size="large"
      @buttonClick="handleClick"
    >
      Click me!
    </comp-button>
  </div>
</template>

<script setup lang="ts">
const handleClick = (event: CustomEvent) => {
  console.log('Button clicked!', event);
};
</script>
```

**Manual Kayıt:**

```typescript
// Component içinde
import { defineButtonElement } from '@arcadia-components/button/bindings/vue';

// Component mount'tan önce
defineButtonElement();
```

### Angular

**Module Kayıt (Tam entegrasyon):**

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { ButtonModule } from '@arcadia-components/button/bindings/angular';

@NgModule({
  imports: [
    ButtonModule.forRoot()
  ],
})
export class AppModule { }
```

```typescript
// component.ts
import { Component } from '@angular/core';
import { ButtonEvents } from '@arcadia-components/button/bindings/angular';

@Component({
  selector: 'app-example',
  template: `
    <comp-button 
      variant="primary" 
      size="large"
      (buttonClick)="handleClick($event)"
    >
      Click me!
    </comp-button>
  `
})
export class ExampleComponent {
  handleClick(event: ButtonEvents['buttonClick']) {
    console.log('Button clicked!', event);
  }
}
```

**Standalone Component:**

```typescript
// component.ts
import { Component } from '@angular/core';
import { ButtonComponent } from '@arcadia-components/button/bindings/angular';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <comp-button variant="primary">
      Click me!
    </comp-button>
  `
})
export class ExampleComponent { }
```

## 🔧 TypeScript Desteği

Tüm binding'ler tam TypeScript desteği ile gelir:

- **Props**: Type-safe prop definitions
- **Events**: Custom event type definitions  
- **Refs**: Element reference typing

## 🎯 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'danger'` | `'primary'` | Button stili |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button boyutu |
| `disabled` | `boolean` | `false` | Disabled durumu |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |

## 📡 Events

| Event | Type | Description |
|-------|------|-------------|
| `buttonClick` | `CustomEvent<MouseEvent>` | Button'a tıklandığında tetiklenir |

