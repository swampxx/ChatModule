import React, { Component } from 'react';

class UserAdd extends Component {
    state = { 
        name: '',
        email: ''
    }

    handleCh1 = (event) => {
        this.setState({name: event.target.value});
    }

    handleCh2 = (event) => {
        this.setState({email: event.target.value});
    }

    handleAdd = () => {
        let str = `/add?name=${this.state.name}&email=${this.state.email}`
        console.log(str);
        fetch(str);
    }

    render() { 
        return ( 
            <React.Fragment>
                <label>Username:</label>
                <input type="text" onChange={this.handleCh1}/> 
                <p/>
                <label >Email:</label>
                <input type="text" onChange={this.handleCh2}/>
                <p/>
                <button onClick={this.handleAdd}>
                    Add
                </button>
            </React.Fragment>
         );
    }
}
 
export default UserAdd;