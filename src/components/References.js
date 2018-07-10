import React from 'react';


// Different references to inputs
class References extends React.Component {
    constructor(props) {
        super(props);
        this.state = {a: ''};
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({
            a: this.a.value,
            b: this.refs.bRef.value,
            c: this.c.refs.inputReference.value
        })
    }
    render() {
        return (
            <div>
                <input // The same
                    ref={ node => this.a = node}
                    type='text'
                    onChange={this.update}
                />
                <span>{this.state.a}</span>

                <hr />

                <input // The same
                    ref='bRef'
                    type='text'
                    onChange={this.update}
                />
                <span>{this.state.b}</span>

                <hr />
                <Input // The same
                    ref={component => this.c = component}
                    update={this.update}
                />
            <span>{this.state.c}</span>
            </div>
        )
    }
}

class Input extends React.Component {
    render() {
        return <input ref="inputReference" type="text" onChange={this.props.update} />
    }
}


export default References
