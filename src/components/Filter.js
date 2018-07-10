import React from 'react';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
        this.filter = this.filter.bind(this);
    }

    componentWillMount() {
        fetch( 'https://swapi.co/api/species/?format=json' )
            .then(response => response.json())
            .then(({results: items}) => this.setState({items})
        )
    }

    filter(e) {
        this.setState({filterText: e.target.value})
    }

    render() {
        let items = this.state.items;

        if(this.state.filterText){
            items = items.filter(item =>
                item.name.toLowerCase().includes(this.state.filterText.toLowerCase())
            )
        }
        return (
            // One way
            // <div>
            //     {items.map(item => <h4 key={item.name}>{item.name}</h4>)
            //     // // All siblings must have a unique key }
            //     }
            // </div>

            // Different way of this usung nested component:
            <div>
                <input type="text" onChange={this.filter} />
                {items.map(item => <PersonItem person={item} key={item.name}/>)}
            </div>
        );
    }
}

const PersonItem = (props) => <h4>{props.person.name}</h4>

export default Filter
