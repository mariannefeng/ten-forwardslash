import React from 'react'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Text } from "rebass";

//https://flaviocopes.com/javascript-sleep/
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

class Slaxshes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slashes: ''
        };
    }
    addSlashes = () => {
        let opacities = [0.5, 0.75, 1]
        for (let index = 0; index < opacities.length; index++) {
            sleep(500)
            this.setState({slashes: this.state.slashes + '/'})
            console.log("SLASHING", this.state)
        }
    }
    removeSlashes = () => {
        [0.5, 0.75, 1].map(async ({opacity, index}) => {
            await sleep(500)
            this.setState({slashes: this.state.slashes.slice(0, 3-index)})
        })
    }
    render = () => {
        return <Text onMouseEnter={this.addSlashes} onMouseLeave={this.removeSlashes} color={this.props.color}>{this.props.text} <Text fontFamily='mono'>{this.state.slashes}</Text></Text>
    }
}

class Slashes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {slashes: []};
    }

    addSlashes = () => {
        this.setState({slashes: ['/', '/', '/']})
    }
    removeSlashes = () => {
        this.setState({slashes: []})
    }


    render() {
        const items = this.state.items.map((item, i) => (
            <div key={item} onClick={() => this.handleRemove(i)}>
                {item}
            </div>
        ));

        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <TransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {items}
                </TransitionGroup>
            </div>
        );
    }
}

Slashes.defaultProps = {
    text: 'MAKE IT SO'
}

export default Slashes
