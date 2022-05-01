import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    state = {
        people: [],
        first: '',
        last: '',
        age: ''
    }

    generateThead = () => {
        if (this.state.people.length == 0) {
            return <h1>No people added yet! Add some people!</h1>
        }
        else {
            return 
            <thead className='table-dark'>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
            </tr>
            </thead>
        }
    }
    generateBody = () => {
        <tbody>
            {this.state.people.map((p,k)=> <PersonRow person = {p} key ={k}/>)}
        </tbody>
                
            }
    addPerson = () => {
                const { people, first, last, age } = this.state;
                const person = {  first, last, age };
                const copyPeople = [person, ...people];
                this.setState({ people: copyPeople, first: '', last: '', age: '' });
                console.log(people);
            }
    clearAll = () => {
                this.setState({ people: [] });
            }

    onTextFirstChange = e => {
                this.setState({ first: e.target.value });
            }

    onTextLastChange = e => {
                this.setState({ last: e.target.value });
            }

    onTextAgeChange = e => {
                this.setState({ age: e.target.value });
            }


        
    
        render(){
            return (
                <div className='container'>
                    <PersonForm firstName={this.state.first}
                                lastName = {this.state.last}
                                age={this.state.age}
                        onClearClick = {this.clearAll}
                        onAddClick = {this.addPerson}
                        onTextFirstChange = {this.onTextFirstChange}
                        onTextLastChange = {this.onTextLastChange}
                        onTextAgeChange = {this.onTextAgeChange} />
        <table className='table table-striped table-bordered'>
                       
                            {this.generateThead()}
                            {this.generateBody()}
                       
                    </table>
                </div>)

        }
    }


export default PeopleTable;