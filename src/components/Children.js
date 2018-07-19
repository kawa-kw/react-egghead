import React from 'react'

class Children extends React.Component {
    render () {
        return (
            <Parent>
                <div className="childA"></div>
                <div className="childB"></div>
            </Parent>
        )
    }
}

class Parent extends React.Component {
    render () {
        // In this way, we have an error if there is only one child in <Parent />
        let items = this.props.children.map(child => child)
        //console.log('items:', items)

        // To do the same thing we use React.Children with every array method, but sometimes with different arguments. This gives us an array even with single object
        let itemsReact = React.Children.map(this.props.children, child => child)
        //console.log('itemsReact:', itemsReact)

        // The same effect:
        let itemsReact2 = React.Children.toArray(this.props.children)
        //console.log('itemsReact2:', itemsReact2)

        let itemsReactForEach = React.Children.forEach(this.props.children, child => console.log(child.props.className))

        // This return only one child, if there is more than one child, it will return an error
        // let itemsReactOnly = React.Children.only(this.props.children)
        // console.log('itemsReactOnly:', itemsReactOnly)

        return null
    }
}

export default Children;
