import React from 'react';


// Parent component
class NestedComponents extends React.Component {
    render() {
        return <Button>I <Heart /> React</Button>
    }
}

const Button = (props) => <button>{props.children}</button>

const Heart = () => <span>&hearts;</span>

export default NestedComponents
