import React, { Component } from 'react';

import './style.less';
export default class Logout extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container _block">
                <p>this is a logout page</p>
            </div>
        )
    }
}