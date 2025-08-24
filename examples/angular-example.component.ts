// Angular kullanım örneği
import { Component } from '@angular/core';
import { ButtonEvents } from '@arcadia-components/button/bindings/angular';

@Component({
  selector: 'app-component-example',
  template: `
    <div style="padding: 20px; font-family: Arial, sans-serif">
      <h1>Angular Components Test</h1>
      
      <section style="margin-bottom: 20px">
        <h2>HelloWorld Component</h2>
        <hello-world></hello-world>
      </section>

      <section>
        <h2>Button Component</h2>
        <div style="display: flex; gap: 10px; flex-wrap: wrap">
          <comp-button 
            variant="primary" 
            size="small"
            (buttonClick)="handleButtonClick($event)"
          >
            Primary Small
          </comp-button>
          
          <comp-button 
            variant="secondary" 
            size="medium"
            (buttonClick)="handleButtonClick($event)"
          >
            Secondary Medium
          </comp-button>
          
          <comp-button 
            variant="danger" 
            size="large"
            (buttonClick)="handleButtonClick($event)"
          >
            Danger Large
          </comp-button>
          
          <comp-button 
            variant="primary" 
            [disabled]="true"
            (buttonClick)="handleButtonClick($event)"
          >
            Disabled
          </comp-button>
        </div>
      </section>
    </div>
  `
})
export class ComponentExampleComponent {
  handleButtonClick(event: ButtonEvents['buttonClick']) {
    console.log('Button clicked!', event.detail);
    alert('Button clicked!');
  }
}
