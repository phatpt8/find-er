require('./style.less');
import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';

const stateToPropsBinding = (state, props) => ({
    notify: state.notify
});
const dispatchToPropsBinding = (dispatch, ownPros) => ({
    showNotify: (item) => dispatch({
        type: SHOW_NOTIFY,
        item
    })
});

@connect(stateToPropsBinding, dispatchToPropsBinding)
export default class PushNotify extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderItem(item, i) {
        const isCenter = item._pos === 'center';
        const canHrzCenter = !isCenter &&
            item.center &&
            ['left', 'right'].indexOf(item._pos) === -1;
        const canVtcCenter = !isCenter &&
            item.center &&
            ['top', 'bottom'].indexOf(item._pos) === -1;

        return (
            <div
                key={i}
                className={classNames(
                    'push-notify _notifications',
                    {
                        '-center': isCenter,
                        '-rise-top': item._pos === 'top',
                        '-rise-left': item._pos === 'left',
                        '-rise-right': item._pos === 'right',
                        '-rise-bottom': item._pos === 'bottom',
                        '-horizontal-center': canHrzCenter,
                        '-vertical-center': canVtcCenter,
                    }
                )}
            >
                {React.cloneElement(
                    item._html,
                    {
                        idx: i,
                        ...item,
                        ...item._html.props
                    }
                )}
            </div>
        );
    }

    render() {
        const { notifications } = this.props.notify;

        return (
            <div className="push-notify _block">
                <div className={classNames(
                    'push-notify _overlay',
                    {
                        // '-dark-bg': notifications.length > 0,
                        // '-hidden': notifications.length === 0
                    }
                )}/>
                {
                    notifications.map(::this.renderItem)
                }
            </div>
        )
    }
}