require('./style.less');
import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import classNames from 'classnames';

// const stateToPropsBinding = (state, props) => ({});
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
        if (this.props.timeout) {
            setTimeout(this.props.closeModal, this.props.timeout);
        }
    }

    render() {
        const { text, emoticon } = this.props;
        const rabbit = 'rabbit-' + (emoticon ? emoticon : 'angry');

        return (
            <div className="notify-html _block -flex-center">
                <div className="notify-html _message">
                    <div className="notify-html _message-title">
                        { text.title }
                    </div>
                    <div className="notify-html _message-content">
                        { text.content }
                    </div>
                </div>
                <div className="notify-html _action">
                    <img width="40" height="40" src={require(`../../public/gif/${rabbit}.gif`)}/>
                </div>
            </div>
        )
    }
}