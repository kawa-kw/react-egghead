import React from 'react'

class ChildrenButtons extends React.Component {
    render () {
        return (
            <Buttons>
                <button value="A">Aew</button>
                <button value="B">Bew</button>
                <button value="C">Cew</button>
            </Buttons>
        )
    }
}

class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 'None'
        }
    }

    selectItem(selected) {
        this.setState({selected})
    }

    render() {
        let fn = child =>
            // We can not modify children by child.onClick, because props.children are not acctual children. This is only descriptor of children. We cant change them, add functionality, we only can read from them. To be able to modify them, we have to create those elements here by React.cloneElement()
            React.cloneElement(child, {
                //onClick: this.selectItem.bind(this, child.props.children)
                onClick: this.selectItem.bind(this, child.props.value)
            })

        // To iterate over children:
        let items = React.Children.map(this.props.children, fn)

        return (
            <div>
                <h4>You have selected: {this.state.selected}</h4>
                {items}
            </div>
        );
    }
}

export default ChildrenButtons;
