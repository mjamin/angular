import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'my-component',
  template: `<div (click)="click()" (change)="change()"></div>`,
})
export class MyComponent {
}

@NgModule({declarations: [MyComponent]})
export class MyModule {
}
