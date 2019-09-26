import { Component, h } from '@stencil/core';

@Component({
  tag: 'acme-app',
  styleUrl: 'acme-app.css',
  shadow: true
})
export class AcmeApp {
  render() {
    return (
      <ion-app>
        <acme-load />
      </ion-app>
    );
  }
}
