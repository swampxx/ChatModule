import React, { Component } from 'react';


function MessageBlock(props){
    return (
        <tr>
            <td>{props.From}</td>
            <td>{props.To}</td>
            <td>{props.Text}</td>
            <td>{props.Date}</td>
            <td>{props.Time}</td>
            <button onClick={()=>{
                props.handleDelete(props.id);
                console.log("$$$$$$$$$$$$$$===>"+props.id);
                }}>del</button>
        </tr>
    );
}


class GetMessages extends Component {
    state = {
        flag: false,
        response: [],
        input: '',
        rows: [],
    };
    
    
    callApi = async () => {
        const response = await fetch('/allMessages');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
    };

    deleteRequest(id){
        fetch(`/texts/${id}`,{
            method: 'DELETE'
        }).then(res=>console.log(res));
    }

    handleDelete = (id) =>{
        var i=0;
        while(true){
            if(this.state.rows[i].props.id === id){
                var newRows=[...this.state.rows];
                fetch(`/texts/${id}`,{
                    method: 'DELETE'
                }).then(res=>console.log(res));
                newRows.splice(i,1);
                this.setState({rows:[...newRows]});
                break;
            }
            i++;
        }
             
    }

    //if all === true then add all messages else get only input's messages.
    handleClick = (all) => {
        var r = [];
        this.callApi().then((res) => {
            for(var i=0;i<res.length;i++){
                if(all || res[i].receiver === this.state.input){
                        r.push(
                            <MessageBlock 
                            key={res[i].id}
                            id={res[i].id}
                            From={res[i].sender}
                            To={res[i].receiver}
                            Text={res[i].text}
                            Date={res[i].date}
                            Time={res[i].time}
                            handleDelete={this.handleDelete}
                            />
                        );
                    }
            }
            this.setState({response: res,flag:all,rows:[...r]});
        });
        
    }

    handleInput = (event) => {
        this.setState({input: event.target.value});
    }


    render() {
        return ( 
            <React.Fragment>
                <input onChange={this.handleInput}/>
                <button onClick={()=>{this.handleClick(false)}}>
                    GetMessages
                </button> 
                <button onClick={()=> {this.handleClick(true)}}>
                AllMessages
                </button>
                <p/>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th><h2>From</h2></th>
                            <th><h2>To</h2></th>
                            <th><h2>Text</h2></th>
                            <th><h2>Date</h2></th>
                            <th> <h2>Time</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.rows}               
                    </tbody>
                </table>
            </React.Fragment>
         );
    }
}
 
export default GetMessages;