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

    generateTable = () => {
        if (this.state.people.length == 0) {
            return <h1>No people added yet! Add some people!</h1>
       }
       else {
            return( 
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.people.map((p,k)=> <PersonRow person = {p} key ={k}/>)}
                </tbody>
         </table>)
       }
    }
   
    addPerson = () => {
       
        const { people, first, last, age } = this.state;
                const person = {  first,
                                 last, 
                                 age 
                                };
                const copyPeople = [person, ...people];
                this.setState({ people: copyPeople, first: '', last: '', age: '' });
                console.log(people);
            }
    clearAll = () => {
            const {people} = this.setState;
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
                    <PersonForm 
                        first={this.state.first}
                        last = {this.state.last}
                        age={this.state.age}
                        onClearClick = {this.clearAll}
                        onAddClick = {this.addPerson}
                        onTextFirstChange = {this.onTextFirstChange}
                        onTextLastChange = {this.onTextLastChange}
                        onTextAgeChange = {this.onTextAgeChange} />       
                       
                {this.generateTable()}                
                </div>)

        }
    }


export default PeopleTable;