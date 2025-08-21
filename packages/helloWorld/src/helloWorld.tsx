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
        <h1>🚀 Hot Reload Test! HMR Working!</h1>
        <p>Bu değişiklik build almadan görünmeli!</p>
      </div>
    );
  }
}
