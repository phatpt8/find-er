require('./style.less');
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';

const stateToPropsBinding = (state, props) => ({});
const dispatchToPropsBinding = (dispatch, ownProps) => ({
    closeModal: () => dispatch(ownProps.close())
});

@connect(null, dispatchToPropsBinding)
export default class PushNotifyHtml extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        setTimeout(this.props.closeModal, 3000);
    }

    render() {
        return (
            <div className="notify-html _block -flex-center">
                <div className="notify-html _message">
                    <div className="notify-html _message-title">
                        Hello there!
                    </div>
                    <div className="notify-html _message-content">
                        This is my website
                    </div>
                </div>
                <div className="notify-html _action">
                    <img width="40" height="40" src={require('../../public/gif/rabbit-smile.gif')}/>
                </div>
            </div>
        )
    }
}