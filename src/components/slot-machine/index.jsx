import './style.less';
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
        this.posArr = [
            15, //orange
            98, //cherry
            182, //banana
            258, //prune
            330, //bar
            397, //seven
            474, //orange
            556, //cherry
            642, //banana
            715, //prune
            790, //bar
            858, //seven
            858, //seven
            858, //seven
            858, //seven
            858, //seven
            858, //seven
            858, //seven
            858, //seven
            858, //seven
            858, //seven
            858, //seven
            858, //seven
            858, //seven
            858 //seven
        ];
        this.mapPos = {
            orange: [15, 474],
            cherry: [98, 556],
            banana: [182, 642],
            prune:  [258, 715],
            bar:    [330, 790],
            seven:  [397, 858]
        }
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
                this[name].style.backgroundPosition = `0 ${bgPos}px`;
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
            const c = [ 3, 3.5, 4, 4.5, 5, 6];
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
                const mapResult = {
                    'seven,seven,seven': 'Amazing!'
                };

                resultMessage = mapResult[result.toString()];
                if (!resultMessage) {
                    resultMessage = 'Try again!'
                }
                this.setState({ resultMessage });
            }
        };
        const mapResult = (pos) => {
            const hasOwn = Object.prototype.hasOwnProperty;
            for (let name in this.mapPos) {
                if (hasOwn.call(this.mapPos, name)) {
                    let arr = this.mapPos[name];
                    if (arr.indexOf(pos) > -1) {
                        return name;
                    }
                }
            }
            return ""
        };

        result.push(mapResult(
            this.rollingSlot('s1', this.s1, randomCount(), checkComplete)));
        result.push(mapResult(
            this.rollingSlot('s2', this.s1, randomCount(), checkComplete)));
        result.push(mapResult(
            this.rollingSlot('s3', this.s1, randomCount(), checkComplete)));
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
                            onClick={::this.startRolling}>{this.state.resultMessage ? this.state.resultMessage : "start"}</div>
                    </div>
                </div>
            </div>
        )
    }
}