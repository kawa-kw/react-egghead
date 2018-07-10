import React from 'react';


// Parent component
class InputUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: 'This is initial state txt',
            cat: 0
        }
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({txt: e.target.value})
    }

    render() {
        let txt = this.props.txt
        return (
            <div>
                <Widget update={this.update}/>
                <Widget update={this.update}/>
                <Widget update={this.update}/>
                <h3 className="hello-class">{this.state.txt} - {this.state.cat}</h3>
                <b>Bold {txt}</b>
            </div>
        )
    }
}


// Child component
// As stateless component
const Widget = (props) => <input type="text" onChange={props.update} />

// The same Widget:
// class Widget extends React.Component {
//     render() {
//         return <input type="text" onChange={this.props.update} />
//     }
// }


// Another way !only if it is stateless component
//const App = () => <h1 className="hello-class">Hi there stateless component</h1>

InputUpdate.defaultProps = {
    txt: 'this is default text',
}

export default InputUpdate
