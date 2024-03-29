import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'acme-demo',
  styleUrl: 'acme-demo.css',
  shadow: true
})
export class AcmeDemo {
  // private tabsEl: HTMLIonTabsElement;

  async componentDidLoad() {
    // await this.tabsEl.componentOnReady();
    // this.tabsEl.select('contentAtoms');
    const tabs = document.querySelector('ion-tabs');
    const selected = await tabs.getSelected();
    if (selected) return;
    tabs.select('contentAtoms');
  }

  render() {
    return (
      <Host>
        <ion-tabs>
          {this.renderTabBar()}

          {/* COMMENT THESE ION-TAB OUT AND IT WILL RENDER! */}

          <ion-tab tab="view">
            <ion-content>
              <h1>AAA</h1>
            </ion-content>
          </ion-tab>
          <ion-tab tab="contentAtoms">
            <ion-content>
              <h1>BBB</h1>
            </ion-content>
          </ion-tab>
          <ion-tab tab="contentAtomStyles">
            <ion-content>
              <h1>CCC</h1>
            </ion-content>
          </ion-tab>
          <ion-tab tab="viewContext">
            <ion-content>
              <h1>DDD</h1>
            </ion-content>
          </ion-tab>
        </ion-tabs>
      </Host>
    );
  }

  private renderTabBar() {
    return (
      <ion-tab-bar slot="top">
        <ion-tab-button tab="view">
          <ion-icon name="eye" />
          <ion-label>View</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="contentAtoms">
          <ion-icon name="code-working" />
          <ion-label>Atoms</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="contentAtomStyles">
          <ion-icon name="brush" />
          <ion-label>Atom Styles</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="viewContext">
          <ion-icon name="cube" />
          <ion-label>Context</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    );
  }
}
