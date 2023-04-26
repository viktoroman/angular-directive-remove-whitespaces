import { Component, Input } from '@angular/core';

@Component({
  selector: 'value-stack',
  // styleUrls: ['input-overview-example.css'],
  template: `
    <div *ngFor="let v of stack" style="white-space: pre;">
      "{{v}}"
    </div>
  `,
})
export class ValueStackComponent {
  @Input() set value(value: string | null) {
    this.stack = [
      value,
      ...(this.stack.length >= 10 ? this.stack.slice(0, 9) : this.stack),
    ];
  }

  public stack: (string | null)[] = [];
}
