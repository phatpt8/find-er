import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {
    Switch,
    Route
} from 'react-router-dom';
import AsyncComponent from '../../AsyncComponent';
import NavBar from '../nav-bar/index';

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

const stateToPropsBinding = (state, props) => ({});
const dispatchToPropsBinding = (dispatch, ownPros) => ({});
@connect(null, null)
export default class Container extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

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
            </div>
        )
    }
}