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
        console.log('componentWillMount')
    }

    render() {
        console.log('render method')
        return (<button onClick={this.update}>{this.state.val}</button>)
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
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
