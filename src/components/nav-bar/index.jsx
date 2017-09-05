import React, {Component} from 'react';

require('./style.less');
export default class NavBar extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container _nav-container">
                <div className="container _nav-burger-menu">

                </div>
                <a href="#">
                    <div className="container _nav-icon"/>
                </a>
                <div className="container _nav-personalize">

                </div>
            </div>
        )
    }
}