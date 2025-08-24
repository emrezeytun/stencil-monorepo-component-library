# HelloWorld Component Bindings

Bu klasör, HelloWorld componentinin farklı framework'lerde kullanılması için gerekli binding'leri içerir.

## 📦 Mevcut Binding'ler

- **React** - React uygulamaları için
- **Vue** - Vue.js uygulamaları için  
- **Angular** - Angular uygulamaları için

## 🚀 Kullanım

### React

```typescript
import { HelloWorld } from '@arcadia-components/hello-world/bindings/react';

function App() {
  return (
    <div>
      <HelloWorld className="my-hello-world" />
    </div>
  );
}
```

### Vue

**Global Kayıt (Plugin kullanarak):**

```typescript
// main.ts
import { createApp } from 'vue';
import { HelloWorldPlugin } from '@arcadia-components/hello-world/bindings/vue';
import App from './App.vue';

const app = createApp(App);
app.use(HelloWorldPlugin);
app.mount('#app');
```

```vue
<!-- App.vue -->
<template>
  <div>
    <hello-world class="my-hello-world" />
  </div>
</template>
```

**Manual Kayıt:**

```typescript
// Component içinde
import { defineHelloWorldElement } from '@arcadia-components/hello-world/bindings/vue';

// Component mount'tan önce
defineHelloWorldElement();
```

### Angular

**Module Kayıt (Tam entegrasyon):**

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { HelloWorldModule } from '@arcadia-components/hello-world/bindings/angular';

@NgModule({
  imports: [
    HelloWorldModule.forRoot()
  ],
})
export class AppModule { }
```

```typescript
// component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <hello-world class="my-hello-world"></hello-world>
  `
})
export class ExampleComponent { }
```

**Standalone Component:**

```typescript
// component.ts
import { Component } from '@angular/core';
import { HelloWorldComponent } from '@arcadia-components/hello-world/bindings/angular';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [HelloWorldComponent],
  template: `
    <hello-world></hello-world>
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

HelloWorld componenti şu anda herhangi bir prop almıyor, sadece statik içerik gösteriyor.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | CSS class name (React için) |
| `class` | `string` | - | CSS class name (Vue için) |

## 📡 Events

HelloWorld componenti şu anda herhangi bir event emit etmiyor.
