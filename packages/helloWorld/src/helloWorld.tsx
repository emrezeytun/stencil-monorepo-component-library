import { Component, h } from '@stencil/core';

@Component({
  tag: 'hello-world',
  styleUrl: 'helloWorld.css',
  shadow: true,
})
export class HelloWorld {
  render() {
    return (
      <div class="hello-world">
        <h1>🔥 UPDATED! HMR Test 2024! tttt abc abc 222</h1>
        <p>Bu değişiklik otomatik görünmeli - Test!  5555 🎯 ⚡ aaaaa bbbb!</p> 
      </div>
    );
  }
}
