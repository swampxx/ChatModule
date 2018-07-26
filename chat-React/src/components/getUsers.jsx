import React, { Component } from 'react';


function UserBlock(props){
    return (
        <tr>
            <td>{props.Username}</td>
            <td>{props.Email}</td>
        </tr>
    );
}


class GetUser extends Component {
    state = {
        flag: false,
        users: [],
    };
    rows = [];
    
    callApi = async () => {
        const response = await fetch('/allUsers');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
    };

    handleClick = () => {
        this.rows = [];
        this.callApi().then((res) => {
            for(var i=0;i<res.length;i++){
                this.rows.push(
                    <UserBlock 
                    key={res[i].id}
                    id={res[i].id}
                    Username={res[i].name}
                    Email={res[i].email}/>
                )
            }
            this.setState({users: res,flag:true});
        });
        
    }

    render() {
        return ( 
            <React.Fragment>
                <button onClick={this.handleClick}>
                    GetUsers
                </button> <p/>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th><h2>Username</h2></th>
                            <th><h2>Email</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.flag && this.rows}               
                    </tbody>
                </table>
            </React.Fragment>
         );
    }
}
 
export default GetUser;