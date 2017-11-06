import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes'
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { ApolloProvider } from 'react-apollo'
import { client } from './configuration'

const Wrapped = (
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>
)

ReactDOM.render(Wrapped, document.getElementById('root'));
registerServiceWorker();