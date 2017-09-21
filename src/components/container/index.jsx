import React, {Component} from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import AsyncComponent from '../../AsyncComponent';
import NavBar from '../nav-bar/index';
import PushNotify from '../push-notify/index';

const AComponent = (name) => () => {
    const asyncLoader = () => () => (
        new Promise(resolve => {
            require.ensure([], () => {
                resolve(import(`components/${name}/index`));
            })
        })
    );

    return (
        <AsyncComponent loader={asyncLoader()} />
    )
};

export default class Container extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        // const _theme = this.props.theme.toLowerCase();

        return (
            <div className="container _block">
                <div className="container _nav">
                    <NavBar/>
                </div>
                <div className="container _main">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={AComponent('homepage')} />}/>
                        <Route
                            path="/logout"
                            component={AComponent('logout')}/>
                        <Route
                            path="/theme"
                            component={AComponent('theme')}/>
                    </Switch>
                </div>
                <PushNotify />
            </div>
        )
    }
}