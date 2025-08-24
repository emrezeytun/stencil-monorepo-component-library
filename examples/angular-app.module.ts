// Angular app module setup example
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from '@arcadia-components/button/bindings/angular';
import { HelloWorldModule } from '@arcadia-components/hello-world/bindings/angular';
import { ComponentExampleComponent } from './angular-example.component';

@NgModule({
  declarations: [
    ComponentExampleComponent
  ],
  imports: [
    BrowserModule,
    // Global module registration
    ButtonModule.forRoot(),
    HelloWorldModule.forRoot()
  ],
  providers: [],
  bootstrap: [ComponentExampleComponent]
})
export class AppModule { }
