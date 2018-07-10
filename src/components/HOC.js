import React from 'react';

// Purpose of Higher Order Components (HOC) is to share functionality and information between multiple components
// HOCs take one component and return another component

const HOC = (InnerComponent) => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.update = this.update.bind(this)
    }

    update() {
        this.setState({count: this.state.count + 1})
    }

    componentWillMount() {
        console.log('will mount from HOC. I dont have to be declared in each component, Im shared msg')
    }

    render() {
        return (
            // We have to spread props to other InnerComponents (`...`)
            <InnerComponent
                {...this.props}
                {...this.state}
                update = {this.update}
            />
        )
    }
}

export default class AppHOC extends React.Component {
  render() {
    return (
        <div>
            <Button>Button</Button>
            <hr />
            <LabelHOC>Label</LabelHOC>
        </div>
    )
  }
}

const Button = HOC((props) =>
    <button onClick = {props.update}>{props.children} - {props.count}</button>
)

class Label extends React.Component {
    componentWillMount() {
        console.log('Im only label msg, Im not shared')
    }
    render () {
        return <label onMouseMove = {this.props.update}>{this.props.children} - {this.props.count}</label>
    }
}

const LabelHOC = HOC(Label)
