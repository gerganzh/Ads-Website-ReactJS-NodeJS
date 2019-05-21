import React, { Component } from 'react'
import Helmet from 'react-helmet';
import axios from 'axios';
import history from '../../history/history';
import './Message.css';

// Reply pretty much works on the same logic as normal message class, but with minor differences

export default class Message extends Component {
    constructor(props){
        super(props);
        this.state={
           title: '',
           message: '',
           senderID: '',
           receiverID: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMessage=this.onChangeMessage.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
    }

    onChangeTitle(event){
        this.setState({title: event.target.value});
      }

    onChangeMessage(event){
        this.setState({message: event.target.value});
      }

      
    handleSubmit(event, message){

        event.preventDefault();
        message = {message}

        const message1={
            title: this.state.title,
            message: this.state.message,
            senderID: this.props.ID,
            receiverID: message.message.sender_id,
            senderName: this.props.User,
            receiverName: message.message.sender_name,
            postingID: message.message.posting_id,
            }

            axios.post('/api/sendMessage', message1)
            .then((response) => {
                console.log(response);
                  if(response.data.status)
                  {
                      history.push('/Sent_Success');
                  }
                })
                }

    render(){
        
    const { location, history } = this.props;
    const { message } = location.state
    return (
      <div history = {history} message = {message} >
      
         <Helmet>
                <style>{'body { background-color: #40B798; } h1,h2, h3, h4 { font-family: "Roboto"; font-size: 20px; color: white; padding: 50px;}'}</style>
            </Helmet>
<div className="containerL2">
                
<form>
<div className="Logo">
<h3>Reply to: <b>{message.sender_name}</b> about <b>Posting ID: {message.posting_id}</b></h3>
</div>
    <div className="form-inputL2">
        <label className = "labelL2" for = "username1">Title:</label>
        <input type="text" className="textarea" name="username1" placeholder="Enter the title of the message" value={this.state.title} onChange={this.onChangeTitle}/>
    </div>
    
    <div className="form-inputL2">
        <textarea type="text" className="textarea" name="message1" placeholder="Enter your message" onChange = {this.onChangeMessage} value={this.state.message}/>
    </div>
        
        <button type="submit"  onClick={e => this.handleSubmit(e, message)}  className="btn-loginL2">Send</button>
        
    
</form>
</div>
</div>
    )
  }
}
