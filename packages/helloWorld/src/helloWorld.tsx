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
        <h1>Hello World! 12 12 abc abc</h1>
        <p>This is a simple Stencil component.</p>
      </div>
    );
  }
}
