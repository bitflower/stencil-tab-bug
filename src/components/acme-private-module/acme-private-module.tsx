import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'acme-private-module',
  styleUrl: 'acme-private-module.css',
  shadow: true
})
export class AcmePrivateModule {
  render() {
    return (
      <Host>
        <stencil-route url="/" component="acme-app-structure" exact={false} />
      </Host>
    );
  }
}
