import React, { Component } from 'react'
import Helmet from 'react-helmet';
import axios from 'axios';
import history from '../../history/history';
import './Message.css';

export default class Message extends Component {
    constructor(props){
        super(props);
        this.state={
           title: '',
           message: '',
           senderID: '',
           receiverID: '',
           senderName: '',
           receiverName: '',
           postingId: ''
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

      
    handleSubmit(event, posting){

        event.preventDefault();
        posting = {posting}

        const message={
            title: this.state.title,
            message: this.state.message,
            senderID: this.props.ID,
            receiverID: posting.posting.user_id,
            postingID: posting.posting.posting_id,
            senderName: this.props.User,
            receiverName: posting.posting.username

            }

//call for sending a message
            axios.post('/api/sendMessage', message)
            .then((response) => {
                console.log(response);
                  if(response.data.status)
                  {
                      history.push('/Sent_Success');
                  }
                  else{
                      history.push('/404'); //if fail
                  }
                })
                }

    render(){
        
    const { location, history } = this.props;
    const { posting } = location.state //carying over the data
    return (
      <div history = {history} posting = {posting} >
      
         <Helmet>
                <style>{'body { background-color: #40B798; } h1,h2, h3, h4 { font-family: "Roboto"; font-size: 20px; color: white; padding: 50px;}'}</style>
            </Helmet>
<div className="containerL2">
                
<form>
<div className="Logo">
<h3>Send a message to: <b>{posting.username}</b> about <b>{posting.title}</b></h3>
</div>
    <div className="form-inputL2">
        <label className = "labelL2" for = "username">Title:</label>
        <input type="text" className="textarea" name="username1" placeholder="Enter the title of the message" value={this.state.title} onChange={this.onChangeTitle}/>
    </div>
    
    <div className="form-inputL2">
        <textarea type="text" className="textarea" name="message1" placeholder="Enter your message" onChange = {this.onChangeMessage} value={this.state.message}/>
    </div>
        
        <button type="submit"  onClick={e => this.handleSubmit(e, posting)}  className="btn-loginL2">Send</button>
        
    
</form>
</div>
</div>
    )
  }
}
