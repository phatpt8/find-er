import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import AsyncComponent from './AsyncComponent';
import NavBar from './components/nav-bar/index';

const Component = (name) => () => {
    const asyncLoader = () => () => (
        new Promise(resolve => {
            require.ensure([], () => {
                resolve(import(`./components/${name}/index`));
            })
        })
    );

    return (
        <AsyncComponent loader={asyncLoader()} />
    )
};

export default () => (
    <BrowserRouter>
        <div className="container _block">
            <div className="container _nav">
                <NavBar/>
            </div>
            <div className="container _main">
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Component('homepage')} />}/>
                    <Route
                        path="/logout"
                        component={Component('logout')}/>
                    <Route
                        path="/theme"
                        component={Component('theme')}/>
                </Switch>
            </div>
        </div>
    </BrowserRouter>
)