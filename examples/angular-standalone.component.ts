// Angular standalone component example
import { Component } from '@angular/core';
import { ButtonComponent, ButtonEvents } from '@arcadia-components/button/bindings/angular';
import { HelloWorldComponent } from '@arcadia-components/hello-world/bindings/angular';

@Component({
  selector: 'app-standalone-example',
  standalone: true,
  imports: [
    ButtonComponent,
    HelloWorldComponent
  ],
  template: `
    <div style="padding: 20px; font-family: Arial, sans-serif">
      <h1>Angular Standalone Components Test</h1>
      
      <section style="margin-bottom: 20px">
        <h2>HelloWorld Component</h2>
        <hello-world></hello-world>
      </section>

      <section>
        <h2>Button Component</h2>
        <div style="display: flex; gap: 10px; flex-wrap: wrap">
          <comp-button 
            variant="primary" 
            size="medium"
            (buttonClick)="handleButtonClick($event)"
          >
            Standalone Button
          </comp-button>
          
          <comp-button 
            variant="secondary" 
            size="small"
            (buttonClick)="handleButtonClick($event)"
          >
            Another Button
          </comp-button>
        </div>
      </section>
    </div>
  `
})
export class StandaloneExampleComponent {
  handleButtonClick(event: ButtonEvents['buttonClick']) {
    console.log('Standalone button clicked!', event.detail);
    alert('Standalone button clicked!');
  }
}
