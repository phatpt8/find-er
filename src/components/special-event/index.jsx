import './style.less';
import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import classNames from 'classnames';
import {SHOW_NOTIFY} from 'actions/notify.reducer';
import PushNotifyHtml from 'components/push-notify-html/index';

const stateToPropsBinding = (state, props) => ({});
const dispatchToPropsBinding = (dispatch, ownProps) => ({
    showNotify: (item) => dispatch({
        type: SHOW_NOTIFY,
        item
    })
});

@connect(stateToPropsBinding, dispatchToPropsBinding)
export default class SpecialEvent extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillReceiveProps(nextProps) {
        console.log('next', nextProps);
    }

    componentDidMount() {
        const to = (fn, delay) => setTimeout(fn, delay);
        to(() => {
            this.props.showNotify({
                text: {
                    title: 'Hello ~',
                    content: 'Anh la Phat!'
                },
                _pos: 'top',
                _html: <PushNotifyHtml/>,
                center: true,
                timeout: 3000,
                emoticon: 'smile'
            });
        }, 1000);
        to(() => {
            this.props.showNotify({
                text: {
                    content: 'Em co phai la Thuy Banh Beo ko?'
                },
                _pos: 'top',
                _html: <PushNotifyHtml/>,
                center: true,
                timeout: 3000,
                emoticon: 'question'
            });
        }, 5500);
        to(() => {
            this.props.showNotify({
                text: {
                    title: 'Happy Birthday',
                    content: 'Loi chuc muon tu anh!'
                },
                _pos: 'left',
                _html: <PushNotifyHtml/>,
                center: true,
                timeout: 3000,
                emoticon: 'shy'
            });
        }, 9000);

        to(() => {
            this.props.showNotify({
                text: {
                    // title: 'Happy Birthday',
                    content: '27/09/2017'
                },
                _pos: 'center',
                _html: <PushNotifyHtml/>,
                center: true,
                timeout: 3000,
                emoticon: 'love'
            });
        }, 13000);


    }

    render() {
        return (
            <div className="special-event _block">
                <div className="special-event _sky-with-stars"/>

            </div>
        )
    }
}