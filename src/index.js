import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as netlifyIdentity from 'netlify-identity-widget';

debugger;

window.netlifyIdentity = netlifyIdentity
// You must run this once before trying to interact with the widget
netlifyIdentity.init()



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
