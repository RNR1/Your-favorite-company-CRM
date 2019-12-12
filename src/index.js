import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {clients} from './stores/Clients'
import {Provider} from 'mobx-react'

const stores = {clients}

ReactDOM.render(<Provider {...stores} ><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
