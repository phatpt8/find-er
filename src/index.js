require('lib/style.less');
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import throttle from 'lodash.throttle';
import rootSaga from './sagas';
import reducers from './reducers';
import routes from './routes';

const STATE = 'qtp';
const loadState = () => {
    try {
        return JSON.parse(
            localStorage.getItem(STATE)
        )
    } catch (err) {
        console.log('Error loading from localStorage');
    }

    return {};
};
const saveState = (state) => {
    try {
        localStorage.setItem(STATE, JSON.stringify(state));
    } catch (err) {
        console.log('Error saving to localStorage');
    }
};
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    loadState() || {},
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware,
            createLogger({ collapsed: true })
        )
    )
);
sagaMiddleware.run(rootSaga);
store.subscribe(throttle(() => {
    const states = store.getState();
    saveState({
        theme: states.theme
    });
}, 1500));

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            { routes() }
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
