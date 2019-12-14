import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {clients} from './stores/Clients'
import {client} from './stores/Client'
import {Provider} from 'mobx-react'

const stores = {clients, client}

ReactDOM.render(<Provider {...stores} ><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
