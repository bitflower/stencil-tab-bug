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
        <ion-split-pane content-id="case-content" when="(min-width: 400px)">
          <ion-menu
            content-id="case-content"
            side="start"
            swipeGesture={true}
            type="overlay"
          >
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
