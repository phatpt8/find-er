import React, { Component, PropTypes } from 'react';

export default class AsyncComponent extends Component {

    static propTypes = {
        loader: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            Component: null,
        };
    }

    componentDidMount() {
        this.props.loader().then((Component) => {
            if (Component.default) {
                Component = Component.default
            }
            this.setState({ Component });
        });
    }

    render() {
        const { Component } = this.state;
        if (Component) {
            return <Component {...this.props} />;
        }

        return (
            <div className="spinner-wrapper">
                <div className="spinner">
                    <div className="rect1"/>
                    <div className="rect2"/>
                    <div className="rect3"/>
                    <div className="rect4"/>
                    <div className="rect5"/>
                </div>
            </div>
        );
    }
}