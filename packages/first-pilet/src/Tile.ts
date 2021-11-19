import { Component, VERSION } from "@angular/core";

@Component({
  template: `
    <div class="teaser">
      <h3>v12 (1): {{ counter }}</h3>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <small>{{version}}</small>
    </div>
  `,
})
export class Tile {
  public counter = 0;
  public version = VERSION.full;

  constructor() {}

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
}
