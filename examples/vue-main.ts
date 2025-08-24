// Vue app setup example
import { createApp } from 'vue';
import { ButtonPlugin } from '@arcadia-components/button/bindings/vue';
import { HelloWorldPlugin } from '@arcadia-components/hello-world/bindings/vue';
import App from './vue-example.vue';

const app = createApp(App);

// Global plugin olarak kaydet - tüm componentlerde kullanılabilir
app.use(ButtonPlugin);
app.use(HelloWorldPlugin);

app.mount('#app');

// Alternative: Manual registration
// import { defineButtonElement, defineHelloWorldElement } from '../packages/button/bindings/vue';
// defineButtonElement();
// defineHelloWorldElement();
