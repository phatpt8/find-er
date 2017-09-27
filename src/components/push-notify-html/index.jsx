require('./style.less');
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';

const stateToPropsBinding = (state, props) => ({});
const dispatchToPropsBinding = (dispatch, ownPros) => ({});

@connect(null, null)
export default class PushNotifyHtml extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log('==>',this.props);
        setTimeout(() => this.props.dispatch(this.props.close()), 3000);
    }

    render() {
        console.log(this.props);
        return (
            <div className="notify-html _block -flex-center">
                <div className="notify-html _message">
                    Hello there!
                </div>
                <div className="notify-html _action">
                    <img width="40" height="40" src={require('../../public/gif/rabbit-smile.gif')}/>
                </div>
            </div>
        )
    }
}