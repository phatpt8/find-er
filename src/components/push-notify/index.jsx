require('./style.less');
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {SHOW_NOTIFY, HIDE_NOTIFY} from 'actions/notify.reducer';

const stateToPropsBinding = (state, props) => ({ state });
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
    // static ContextTypes = {
    //     store: PropTypes.object
    // };

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.showNotify({
            _html: <div/>,
            _pos: 'left'
        })
    }

    close() {

    }

    render() {
        return (
            <div className="push-notify _block">
                <div className="push-notify _overlay">

                </div>
            </div>
        )
    }
}