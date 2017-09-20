require('./style.less');
import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

const stateToPropsBinding = (state, props) => ({});
const dispatchToPropsBinding = (dispatch, ownPros) => ({});

@connect(null, null)
export default class SlotMachine extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.slotDefaultProps = {
            isScrolling: false,
            styles: {
                animationName: 'none',
                animationDuration: '0s',
                animationTimingFunction: 'ease',
                animationIterationCount: '1'
            }
        };
        this.state = {
            resultMessage: "",
            s1: this.slotDefaultProps,
            s2: this.slotDefaultProps,
            s3: this.slotDefaultProps
        };
        this.imgHeight = 1374;
        this.posArr = [
            0, //orange
            80, //number 7
            165, //bar
            237, //guava
            310, //banana
            378, //cherry
            454, //orange
            539, //number 7
            624, //bar
            696, //guava
            769, //banana
            837, //cherry
            913, //orange
            1000, //number 7
            1085, //bar
            1157, //guava
            1230, //banana
            1298 //cherry
        ];
    }

    componentWillReceiveProps(nextState, nextProps) {
        console.log(nextState, nextProps);
    }

    rollingSlot(name, el, count, cb) {
        const fnSlotTimeout = name + 'FnTimeout';
        const pos = this.posArr;
        const posLen = pos.length;
        const bgPos = pos[Math.floor(Math.random() * posLen)];
        const slotStyle = {
            isScrolling: true,
            styles: {
                animationName: 'slotRolling',
                animationDuration: count + 's',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite'
            }
        };
        let cnt = count;
        const fn = () => {
            if (Math.abs(cnt) === count + 1) {
                clearTimeout(this[fnSlotTimeout]);
                el.style.animationDuration = '0s';
                this[name].style.backgroundPosition = `0 -${bgPos - 6}px`;
                this.setState({ [name]: this.slotDefaultProps }, () => cb(name, true));
                return;
            }
            this[fnSlotTimeout] = setTimeout(fn, 1000);
            el.style.animationDuration = Math.abs(cnt) !== 0 ? (Math.abs(cnt) + 's') : '.5s';
            cnt--;
        };

        clearTimeout(this[fnSlotTimeout]);
        this[fnSlotTimeout] = setTimeout(fn, 1000);
        this.setState({ [name]: slotStyle });
        return bgPos;
    }

    startRolling() {
        const result = [];
        const randomCount = () => {
            const c = [2, 3, 4, 5];
            return c[Math.floor(Math.random() * c.length)]
        };
        const status = {
            s1: false,
            s2: false,
            s3: false
        };
        const checkComplete = (name, completed) => {
            let resultMessage = "";
            status[name] = completed;

            if (
                status.s1 &&
                status.s2 &&
                status.s3
            ) {
                if (
                    result.indexOf(80) > -1 &&
                    result.indexOf(539) > -1 &&
                    result.indexOf(1000) > -1
                ) {
                    resultMessage = "win";
                } else {
                    resultMessage = "lose";
                }
                this.setState({ resultMessage });
            }
        };

        result.push(this.rollingSlot('s1', this.s1, randomCount(), checkComplete));
        result.push(this.rollingSlot('s2', this.s1, randomCount(), checkComplete));
        result.push(this.rollingSlot('s3', this.s1, randomCount(), checkComplete));
    }

    render() {

        return (
            <div className="slot-machine _block">
                <div className="slot-machine _header">
                    <h1> This is a slot machine (WIP) </h1>
                </div>
                <div className="slot-machine _machine">
                    <div className="slot-machine _wrapper">
                        {
                            ['s1','s2','s3'].map((name, i) =>
                                <div
                                    key={i}
                                    ref={e => this[name] = e}
                                    className={classNames(
                                        'slot-machine _slot',
                                        {
                                            '-rolling': this.state[name].isScrolling
                                        }
                                    )}
                                    style={this.state[name].styles}
                                />
                            )
                        }
                    </div>
                    <div className="slot-machine _start-wrapper">
                        <div
                            className="btn _slot-machine-start"
                            onClick={::this.startRolling}>{this.state.resultMessage ? ('you ' + this.state.resultMessage) : "start"}</div>
                    </div>
                </div>
            </div>
        )
    }
}