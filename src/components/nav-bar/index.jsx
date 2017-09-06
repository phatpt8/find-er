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
                <div className="container _nav-animate-lines">
                    <div className="container _nav-line-pos">
                        <div className="container _nav-line _nav-line-a"/>
                        <div className="container _nav-line _nav-line-b"/>
                        <div className="container _nav-line _nav-line-c"/>
                    </div>
                </div>
                <div className="container _nav-personalize">

                </div>
            </div>
        )
    }
}