import { Component, h } from '@stencil/core';

@Component({
  tag: 'acme-load',
  styleUrl: 'acme-load.css',
  shadow: true
})
export class AcmeLoad {
  render() {
    return (
      <div>
        {/* <header>
          <h1>Stencil App Starter</h1>
        </header> */}

        {/* <main> */}
        <stencil-router>
          {/* <stencil-route-switch scrollTopOffset={0}> */}
          <stencil-route url="/" component="app-home" exact={false} />
          <stencil-route url="/profile/:name" component="app-profile" />
          {/* </stencil-route-switch> */}
        </stencil-router>
        {/* </main> */}
      </div>
    );
  }
}
