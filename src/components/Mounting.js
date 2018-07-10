import React from 'react';
import ReactDOM from 'react-dom';

class Mounting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {val: 0};
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({val: this.state.val + 1})
    }

    componentWillMount() {
        // We have access to state and props, but we don't have access to DOM representation of this component, because it isn't mounted yet (not placed in DOM yet)
        // We can set the state before it accually renders
        console.log('componentWillMount')
        this.setState({m: 2})
    }

    render() {
        console.log('render method')
        return (
            <div>
                <button onClick={this.update}>{this.state.val}</button>
                <button onClick={this.update}>{this.state.val * this.state.m}</button>
            </div>
        )
    }

    componentDidMount() {
        // We have access to our component in the DOM
        console.log('componentDidMount')
        console.log(ReactDOM.findDOMNode(this))

        // New variable this.inc calls update every 1s, so render() is called automatically
        this.inc = setInterval(this.update, 1000)
    }

    componentWillUnmount() {
        // We can clean up any running processes
        console.log('componentWillUnmount')

        // If we don't clean the interval^ here, we would have error after unmounting buttons, because interval would go on component, which doesn't exist any more

        clearInterval(this.inc)
    }
}

class Wrapper extends React.Component {
    mount() {
        ReactDOM.render(<Mounting />, document.getElementById('place-for-btn'))
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('place-for-btn'))
    }

    render() {
        return(
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>

                <div id="place-for-btn"></div>
            </div>
        )
    }
}

export default Wrapper
