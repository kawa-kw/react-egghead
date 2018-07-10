import React from 'react';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentEvent: '----'}
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({currentEvent: e.type})
    }

    render() {
        return (
            <div>
                <textarea
                    onKeyPress={this.update}
                    onCut={this.update}
                    onCopy={this.update}
                    onPaste={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onMouseEnter={this.update}
                    onDoubleClick={this.update}
                    onTouchStart={this.update}
                    onTouchEnd={this.update}
                    cols="30"
                    rows="10"
                />
                <h3>Current event: {this.state.currentEvent}</h3>
            </div>
        )
    }
}

export default Events
