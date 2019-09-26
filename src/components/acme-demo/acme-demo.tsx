import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'acme-demo',
  styleUrl: 'acme-demo.css',
  shadow: true
})
export class AcmeDemo {
  render() {
    return (
      <Host>
        <h1>YOOO</h1>
      </Host>
    );
  }
}
