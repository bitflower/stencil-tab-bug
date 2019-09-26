import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'acme-app-structure',
  styleUrl: 'acme-app-structure.css',
  shadow: true
})
export class AcmeAppStructure {
  render() {
    return (
      <Host>
        {/* <ion-list>
          <ion-item>
            <ion-label>Hello</ion-label>
            World
          </ion-item>
        </ion-list> */}
        <ion-split-pane content-id="case-content" when="(min-width: 1600px)">
          <ion-menu>
            <ion-header>
              <ion-toolbar>App Features</ion-toolbar>
            </ion-header>
            <ion-content>
              <ion-list>
                <ion-item>
                  <stencil-route-link url="/route1">
                    <button>Profile page</button>
                  </stencil-route-link>
                </ion-item>
              </ion-list>
            </ion-content>
          </ion-menu>
          <ion-content id="case-content" scrollX={false} scrollY={false}>
            <stencil-route url="/route1" component="acme-demo" exact={false} />
          </ion-content>
        </ion-split-pane>
      </Host>
    );
  }
}
