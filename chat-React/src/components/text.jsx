import React, { Component } from 'react';

class TextBox extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            from: props.from,
            to: props.to,
            text: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({to: event.target.value});
    }

    handleText = (event) => {
        this.setState({text: event.target.value});
    }

    handleSubmission = () => {
        let d = new Date();
        console.log(d.toLocaleDateString());
        console.log(d.toLocaleTimeString());
        fetch('/addMessage',{
            method: 'POST',
            headers: new Headers({
                       'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
              }),
            body: `sender=${this.state.from}&receiver=${this.state.to}&text=${this.state.text}&date=${d.toLocaleDateString()}&time=${d.toLocaleTimeString()}` // <-- Post parameters
          }).then(res => console.log(res));
    }

    render() { 
        return (
            <React.Fragment>
                <p/>
                <form>
                    <label>
                        From:
                        <input value={this.state.from} readOnly />
                    </label>
                    <p />
                    <label>
                        To:
                    <input value={this.state.to} onChange={this.handleChange}  />
                    </label>
                </form>
                <p/>
                <textarea rows="4" cols="50" 
                    onChange={this.handleText}
                    placeholder="Write your message here"
                />
                <p/>
                <button onClick = {this.handleSubmission}>
                    Submit Message
                </button>
          </React.Fragment> );
    }
}
 
export default TextBox;