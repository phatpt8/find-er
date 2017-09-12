require('./style.less');
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { START_CONTAINER } from "actions/container.reducer";

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
        this.state = {};
    }

    componentDidMount() {
        this.props.init();
    }

    render() {
        return (
            <div className="homepage _block">

            </div>
        )
    }
}