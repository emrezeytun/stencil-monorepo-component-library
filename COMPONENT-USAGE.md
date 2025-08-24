# 🎯 Component Bindings Usage Guide

Bu monorepo'da bulunan tüm componentler için React ve Vue binding'leri mevcuttur.

## 📦 Mevcut Componentler

| Component | Package | React | Vue | Angular |
|-----------|---------|-------|-----|---------|
| Button | `@comp-test/button` | ✅ | ✅ | ✅ |
| HelloWorld | `@comp-test/hello-world` | ✅ | ✅ | ✅ |

## 🚀 Hızlı Başlangıç

### React Projesi

```bash
# Component paketini yükle
npm install @arcadia-components/button @arcadia-components/hello-world

# Kullanım
import { Button } from '@arcadia-components/button/bindings/react';
import { HelloWorld } from '@arcadia-components/hello-world/bindings/react';
```

### Vue Projesi

```bash
# Component paketini yükle
npm install @arcadia-components/button @arcadia-components/hello-world

# Global plugin olarak kaydet
import { ButtonPlugin, HelloWorldPlugin } from '@arcadia-components/button/bindings/vue';
app.use(ButtonPlugin);
app.use(HelloWorldPlugin);
```

### Angular Projesi

```bash
# Component paketini yükle
npm install @arcadia-components/button @arcadia-components/hello-world

# Module imports
import { ButtonModule, HelloWorldModule } from '@arcadia-components/button/bindings/angular';
// app.module.ts'de imports array'ine ekle
ButtonModule.forRoot(), HelloWorldModule.forRoot()
```

## 🏗️ Component Binding Yapısı

Her component için aşağıdaki yapı kullanılır:

```
packages/
├── [component-name]/
│   ├── bindings/
│   │   ├── react/
│   │   │   ├── index.ts          # React component export
│   │   │   └── react-component-lib.ts  # React wrapper utility
│   │   ├── vue/
│   │   │   └── index.ts          # Vue plugin + types
│   │   ├── angular/
│   │   │   ├── index.ts          # Angular module
│   │   │   └── proxies.ts        # Angular proxies
│   │   └── README.md             # Binding dokümantasyonu
│   ├── src/                      # Stencil component source
│   ├── dist/                     # Build output
│   └── loader/                   # Component loader
```

## 🔧 Özellikler

### React Binding'leri

- ✅ **Full TypeScript Support** - Tam tip güvenliği
- ✅ **Event Handling** - Custom event'ler için otomatik dönüşüm
- ✅ **Ref Support** - forwardRef ile element referansları
- ✅ **Standard Props** - children, className, style desteği

### Vue Binding'leri

- ✅ **Plugin Pattern** - Global kayıt için Vue plugin
- ✅ **Manual Registration** - Seçici kullanım için manuel kayıt
- ✅ **TypeScript Support** - Global component types
- ✅ **Event Binding** - Native Vue event binding

### Angular Binding'leri

- ✅ **NgModule Pattern** - Hem module hem standalone desteği
- ✅ **Component Proxies** - Native Angular component wrapper'ları
- ✅ **Event Binding** - RxJS Observable tabanlı event handling
- ✅ **TypeScript Support** - Full type safety
- ✅ **Change Detection** - OnPush strategy ile optimize edilmiş

## 📋 Development Workflow

### Yeni Component Binding Ekleme

1. **Component Oluştur** - Stencil ile yeni component
2. **React Binding** - `bindings/react/index.ts` oluştur
3. **Vue Binding** - `bindings/vue/index.ts` oluştur
4. **Angular Binding** - `bindings/angular/index.ts` ve `proxies.ts` oluştur
5. **Types Ekle** - TypeScript interface'leri tanımla
6. **Test Et** - Her framework'te test et
7. **Dokümante Et** - README.md güncelle

### Pattern'ler

#### React Component Pattern
```typescript
// bindings/react/index.ts
import React from 'react';
import { createReactComponent } from './react-component-lib';
import { defineCustomElements } from '../../loader';

defineCustomElements();

export interface ComponentProps {
  // Props tanımla
}

export const Component = createReactComponent<ComponentProps, HTMLElement>('component-tag');
```

#### Vue Plugin Pattern
```typescript
// bindings/vue/index.ts
import { App } from 'vue';
import { defineCustomElements } from '../../loader';

export interface ComponentProps {
  // Props tanımla
}

export const ComponentPlugin = {
  install(app: App) {
    defineCustomElements();
  }
};

export const defineComponentElement = () => {
  defineCustomElements();
};

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    'component-tag': ComponentProps;
  }
}
```

#### Angular Module Pattern
```typescript
// bindings/angular/index.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineCustomElements } from '../../loader';
import { ComponentComponent } from './proxies';

export interface ComponentProps {
  // Props tanımla
}

const DECLARATIONS = [ComponentComponent];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: DECLARATIONS
})
export class ComponentModule {
  constructor() {
    defineCustomElements();
  }
  
  static forRoot() {
    return {
      ngModule: ComponentModule,
      providers: []
    };
  }
}
```

#### Angular Proxy Pattern
```typescript
// bindings/angular/proxies.ts
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

@ProxyCmp({
  inputs: ['prop1', 'prop2'],
  methods: ['method1']
})
@Component({
  selector: 'component-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['prop1', 'prop2']
})
export class ComponentComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['customEvent']);
  }
}
```

## 🧪 Test Etme

```bash
# React test
cd packages/[component-name]
npm run test:react

# Vue test  
npm run test:vue

# Angular test
npm run test:angular

# Tüm binding'leri test et
npm run test:bindings
```

## 📚 Daha Fazla Bilgi

Her component için detaylı kullanım kılavuzu:
- [Button Component](./packages/button/bindings/README.md)
- [HelloWorld Component](./packages/helloWorld/bindings/README.md)

## 🤝 Katkıda Bulunma

1. Yeni component binding'i eklerken bu pattern'leri takip edin
2. TypeScript desteğini her zaman ekleyin
3. README dokümantasyonunu güncel tutun
4. Test coverage'ı sağlayın
