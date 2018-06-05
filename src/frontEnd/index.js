import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { view as Home } from './pages/home/index';
import store from './store';

// test
import './engine/test';

const div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

const mountNode = document.getElementById('app');

ReactDom.render(
    <AppContainer>
        <Provider store={store}>
            <Home />
        </Provider>
    </AppContainer>,
    mountNode
);

if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept();
}
