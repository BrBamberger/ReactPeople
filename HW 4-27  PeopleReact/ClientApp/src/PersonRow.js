import React from 'react';

class PersonRow extends React.Component {

    getOlderPerson = (age) => {
        let className = '';
        if (age>65){
            className = 'bg-danger'
        }
    return className;
    }

    render() {
        const { person, key } = this.props;
        return (
            <tr key = {key} className={this.getOlderPerson(person.age)}>
                <td>{person.first}</td>
                <td>{person.last}</td>
                <td>{person.age}</td>
            </tr>
        )
        
    }
}

export default PersonRow;