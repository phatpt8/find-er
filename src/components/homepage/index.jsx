import './style.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { START_CONTAINER } from "actions/container.reducer";
import SlotMachine from 'components/slot-machine/index';

const mapStateToPropsBinding = (state, ownProps) => ({});

const dispatchToPropsBinding = (dispatch, ownProps) => ({
    init: () => dispatch({ type: START_CONTAINER })
});

@connect(null, dispatchToPropsBinding)
export default class Homepage extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            apps: [
                { title: 'Slot Machine' },
                { title: 'Theme' },
                { title: 'Third Project' },
                { title: 'Forth Project' }
            ]
        };
    }

    componentDidMount() {
        this.props.init();
    }

    renderItem(data, i) {

        return (
            <div key={i} className="homepage _flex-item">
                <div className="homepage _flex-item-wrapper">
                    <a href="/slot-machine" className="homepage _item-anchor">
                        <img className="homepage _item-img" width="210" height="118" src={require('../../public/img/b3.jpeg')}/>
                    </a>
                </div>
                <div className="homepage _flex-item-detail">
                    <div className="homepage _flex-item-title">
                        { data.title }
                    </div>
                </div>
            </div>
        )
    }

    render() {

        return (
            <div className="homepage _block">
                <div className="homepage _block-flex">
                    {
                        this.state.apps.map(::this.renderItem)
                    }
                </div>
            </div>
        )
    }
}