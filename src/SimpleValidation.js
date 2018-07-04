import React from 'react';
import PropTypes from 'prop-types';


// Parent component
class SimpleValidation extends React.Component {
    render() {
        return <Title text="212dsdasd3"/>
    }
}

const Title = (props) => <h3>Title: {props.text}</h3>

Title.propTypes = {
    text(props, propName, component) {
        if (!(propName in props)) {
            return new Error(`Missing ${propName}`)
        }

        if (props[propName].length < 6) {
            return new Error(`${propName} prop is too short`)
        }
    }
}

export default SimpleValidation
