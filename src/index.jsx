import React from 'react';
import ReactDOM from 'react-dom';
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader';
import App from './app'

applyPolyfills().then(() => {
  defineCustomElements(window, {resourcesUrl: './a'});
});

ReactDOM.render(<App />, document.getElementById("root"));