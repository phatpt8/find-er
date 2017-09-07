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
                <div className="container _nav-burger-menu"/>
                <a className="container _nav-icon-wrapper" href="#">
                    <div className="container _nav-icon"/>
                </a>
                <div className="container _nav-animate-lines">
                    <div className="container _nav-line-pos">
                        <div className="container _nav-line _nav-line-a"/>
                        <div className="container _nav-line _nav-line-b"/>
                        <div className="container _nav-line _nav-line-c"/>
                    </div>
                </div>
                <div className="container _nav-search-container">

                </div>
                <div className="container _nav-personalize">
                    <div className="btn _nav-btn">
                        <a className="btn _a" href="/about-them">About them</a>
                    </div>
                    <div className="btn _nav-btn">
                        <a className="btn _a" href="/about-her">About her</a>
                    </div>
                    <div className="btn _nav-btn">
                        <a className="btn _a" href="/about-me">About me</a>
                    </div>
                </div>
            </div>
        )
    }
}