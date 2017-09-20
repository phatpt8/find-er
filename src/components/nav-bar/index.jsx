require('./style.less');
import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

const mapStateToPropsBinding = (state, props) => ({
    theme: state.theme.themes
});

@connect(mapStateToPropsBinding, null)
export default class NavBar extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const _theme = '-' + this.props.theme.toLowerCase();

        return (
            <div className={classNames(
                'container _nav-container',
                _theme
            )}>
                <div className="container _nav-burger-menu"/>
                <a className="container _nav-icon-wrapper" href="/">
                    <div className="container _nav-icon"/>
                </a>
                {false &&
                <div className="container _nav-animate-lines">
                    <div className="container _nav-line-pos">
                        <div className="container _nav-line _nav-line-a"/>
                        <div className="container _nav-line _nav-line-b"/>
                        <div className="container _nav-line _nav-line-c"/>
                    </div>
                </div>
                }
                <div className="container _nav-search-container">

                </div>
                <div className="container _nav-personalize">
                    <div className="btn _nav-btn">
                        <a className="btn _a" href="/theme">Theme</a>
                    </div>
                </div>
            </div>
        )
    }
}