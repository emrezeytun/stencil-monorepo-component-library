# 🧪 Component Usage Examples

Bu klasör, componentlerin farklı framework'lerde nasıl kullanılacağını gösteren örnekleri içerir.

## 📁 Dosyalar

| Dosya | Framework | Açıklama |
|-------|-----------|----------|
| `react-example.tsx` | React | React componentlerin kullanımı |
| `vue-example.vue` | Vue | Vue componentlerin kullanımı |
| `vue-main.ts` | Vue | Vue app setup ve plugin registration |
| `angular-example.component.ts` | Angular | Angular componentlerin kullanımı |
| `angular-app.module.ts` | Angular | Angular module setup |
| `angular-standalone.component.ts` | Angular | Angular standalone component örneği |

## 🚀 Kullanım

### React Örneği Çalıştırma

```bash
# React projesinde
npm install react react-dom @types/react
# Örnek dosyayı import et
import App from './examples/react-example';
```

### Vue Örneği Çalıştırma

```bash
# Vue projesinde
npm install vue
# Main.ts'i setup et
import './examples/vue-main';
```

### Angular Örneği Çalıştırma

```bash
# Angular projesinde
npm install @angular/core @angular/common rxjs
# Module'u import et
import { ComponentExampleComponent } from './examples/angular-example.component';
# veya standalone component
import { StandaloneExampleComponent } from './examples/angular-standalone.component';
```

## 🎯 Örneklerde Gösterilen Özellikler

### React Örneği
- ✅ Component import'u
- ✅ Props kullanımı
- ✅ Event handling
- ✅ TypeScript typing
- ✅ Multiple variant'lar

### Vue Örneği  
- ✅ Plugin registration
- ✅ Template kullanımı
- ✅ Event binding
- ✅ Reactive props
- ✅ Composition API

### Angular Örneği
- ✅ NgModule pattern
- ✅ Component templates
- ✅ Event binding
- ✅ Property binding
- ✅ TypeScript integration
- ✅ Standalone components

## 🔧 Development

Bu örnekleri geliştirme sürecinde test için kullanabilirsin:

```bash
# Component'i build et
cd packages/button
npm run build

# Örneği test et
cd ../../examples
# React, Vue veya Angular test setup'ı yap
```

## 📚 Daha Fazla Örnek

Her component'in kendi binding klasöründe de örnekler var:
- [Button Examples](../packages/button/bindings/README.md)
- [HelloWorld Examples](../packages/helloWorld/bindings/README.md)
