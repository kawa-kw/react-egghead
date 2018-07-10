import React from 'react';
import ReactDOM from 'react-dom';

class MountingLevelUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {increasing: false}
    }

    update() {
        ReactDOM.render(<MountingLevelUp val={this.props.val + 1} />, document.getElementById('root'))
    }

    componentWillReceiveProps (nextProps) {
        // Shows that new props are comming in, new props are nextProps
        this.setState({increasing: nextProps.val > this.props.val})
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Always returns true or false, we can prevent from re-rendering
        return nextProps.val % 5 === 0; // returns true only of nextProps are multiplication of five, so component will re-render only if props.val is multiplication of five, so it will fire update() only if props.val is multiplication of five, but state and props will be updated
    }

    render() {
        //console.log(this.state.increasing)
        return (
            <button onClick={this.update.bind(this)}>
                {this.props.val}
            </button>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`prevProps: ${prevProps.val}`)
    }
}

MountingLevelUp.defaultProps = {val: 0}

export default MountingLevelUp
