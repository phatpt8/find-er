import React, { Component, PropTypes } from 'react';

class AsyncComponent extends Component {

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
            <div className="spinner-wrapper _block">
                <div className="spinner-wrapper _spinner">
                    <div className="_rect1"/>
                    <div className="_rect2"/>
                    <div className="_rect3"/>
                    <div className="_rect4"/>
                    <div className="_rect5"/>
                </div>
            </div>
        );
    }
}
const AComponent = (name) => () => {
    const asyncLoader = () => () => (
        new Promise(resolve => {
            require.ensure([], () => {
                resolve(import(`components/${name}/index`));
            })
        })
    );

    return (
        <AsyncComponent loader={asyncLoader()} />
    )
};

export default AComponent