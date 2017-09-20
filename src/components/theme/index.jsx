require('./style.less');
import React, {Component} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {THEME_DAY, THEME_NIGHT} from 'actions/theme.reducer';

const stateToPropsBinding = (state, props) => ({
    theme: state.theme
});
const dispatchToPropsBinding = (dispatch, ownProps) => ({
    themChanged: (theme) => {
        dispatch({
            type: theme
        });
        return theme
    }
});

@connect(stateToPropsBinding, dispatchToPropsBinding)
export default class DayNight extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            theme: props.theme.themes
        }
    }

    onSwitchClick() {
        const _theme = this.state.theme;
        this.setState({
            theme: this.props.themChanged(
                _theme === THEME_DAY ? THEME_NIGHT : THEME_DAY
            )
        })
    }

    render() {
        return (
            <div className="daynight _block">
                <div className={classNames(
                    'daynight _section',
                    {
                        '-night': this.state.theme === THEME_NIGHT
                    }
                )}>
                    <div className="daynight _time-circle">
                        <div className="sun"/>
                        <div className="moon">
                            <div/>
                            <div/>
                            <div/>
                        </div>
                        <div className="stars">
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                        </div>
                        <div className="water"/>
                    </div>
                    <div className={classNames(
                        'daynight _switch',
                        {
                            '-switched': this.state.theme === THEME_NIGHT
                        }
                    )}
                        onClick={::this.onSwitchClick}>
                        <div className="daynight _circle"/>
                    </div>
                </div>
            </div>
        )
    }
}